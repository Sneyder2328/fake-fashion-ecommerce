import { commerce } from "./../../_lib/commerce";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoadingSpinner } from "@/app/_components/loading-spinner";
import { CartItemSkeleton } from "./cart-item-skeleton";
import { CartItem } from "./cart-item";
import { Modal } from "../base-modal";
import { Button } from "../button";
import Scrollbar from "react-scrollbars-custom";
import { trackYStyle } from "@/app/_lib/styles";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export function ShoppingCartModal({ isOpen, setIsOpen }: Props) {
  const queryClient = useQueryClient();

  const removeItemMutation = useMutation({
    mutationFn: ({ lineId }: { lineId: string }) =>
      commerce.cart.remove(lineId),
    onSuccess: (removeResponse) => {
      console.log("removeResponse=", removeResponse);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const updateItemMutation = useMutation({
    mutationFn: ({ lineId, cart }: { lineId: string; cart: object }) =>
      commerce.cart.update(lineId, cart),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: () => commerce.cart.retrieve(),
  });

  return (
    <Modal
      title="Shopping Cart"
      onHide={() => setIsOpen(false)}
      isOpen={isOpen}
    >
      <div className="flex h-full flex-col justify-between">
        <Scrollbar noScrollX={true} trackYProps={{ style: trackYStyle }}>
          <div className="space-y-4">
            {cartQuery.isFetching && <CartItemSkeleton />}
            {!cartQuery.isFetching &&
              cartQuery.data?.line_items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onChangeQuantity={(quantity) =>
                    updateItemMutation.mutate({
                      lineId: item.id,
                      cart: { quantity },
                    })
                  }
                  onRemove={() =>
                    removeItemMutation.mutate({ lineId: item.id })
                  }
                />
              ))}
          </div>
        </Scrollbar>
        <div className="mt-6">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-extrabold">
              {cartQuery.data?.subtotal.formatted_with_symbol}
            </span>
          </div>
          <Button className="mt-6 w-full">Check out</Button>
        </div>
      </div>
      {updateItemMutation.isLoading && (
        <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center bg-gray-700 bg-opacity-40">
          <LoadingSpinner size={48} />
        </div>
      )}
    </Modal>
  );
}
