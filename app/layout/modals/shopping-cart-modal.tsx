import { Modal } from "./base-modal";
import { commerce } from "./../../_lib/commerce";
import { LineItem } from "@chec/commerce.js/types/line-item";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoadingSpinner } from "@/app/_components/loading-spinner";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { InternalLinks } from "@/app/_lib/constants";

function Counter({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="inline rounded bg-[#f8f8f8] py-1">
      <button
        className="w-7 text-slate-500"
        onClick={() => onChange(value - 1)}
      >
        -
      </button>
      <span className="w-8 text-slate-500">{value}</span>
      <button
        className="w-7 text-slate-500"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}

function CartItem({
  onChangeQuantity,
  onRemove,
  item,
}: {
  onChangeQuantity: (quantity: number) => void;
  onRemove: () => void;
  item: LineItem;
}) {
  return (
    <div className="flex border-b-[2px] border-b-[#f8f8f8] pb-4">
      <img src={item.image?.url} alt={item.name} className="w-16" />
      <div className="ml-4 flex grow flex-col justify-between">
        <Link
          href={InternalLinks.PRODUCT(item.permalink)}
          className="hover:underline"
        >
          <span className="text-slate-500">{item.name}</span>
        </Link>
        {/* {Object.values(item.variant?.options ?? {}).reduce((acc, option) => {
          return acc + " " + option;
        }, "")} */}
        <div className="flex justify-between">
          <div>
            <Counter
              value={item.quantity}
              onChange={(quantity) => onChangeQuantity(quantity)}
            />
            <span className="ml-4 font-extrabold">
              {item.price.formatted_with_symbol}
            </span>
          </div>
          <TrashIcon
            className="h-5 w-5 text-slate-400 hover:cursor-pointer"
            onClick={onRemove}
          />
        </div>
      </div>
    </div>
  );
}

function CartItemSkeleton() {
  return (
    <div className="flex">
      <Skeleton className="h-24 w-16" />
      <div className="ml-4 flex grow flex-col justify-between">
        <Skeleton count={2} />
        <Skeleton />
      </div>
    </div>
  );
}

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
                onRemove={() => removeItemMutation.mutate({ lineId: item.id })}
              />
            ))}
        </div>
        <div>
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-extrabold">
              {cartQuery.data?.subtotal.formatted_with_symbol}
            </span>
          </div>
          <button className="mt-6 w-full bg-black py-2 uppercase text-white hover:bg-gray-600">
            Check out
          </button>
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
