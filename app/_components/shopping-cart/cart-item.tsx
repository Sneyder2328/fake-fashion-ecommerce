import { LineItem } from "@chec/commerce.js/types/line-item";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { InternalLinks } from "@/app/_lib/constants";
import { CardItemsCounter } from "./cart-items-counter";
import { ImageWrapper } from "../image-wrapper";

export function CartItem({
  onChangeQuantity,
  onRemove,
  item,
}: {
  onChangeQuantity: (quantity: number) => void;
  onRemove: () => void;
  item: LineItem;
}) {
  return (
    <div className="flex border-b-[2px] border-b-primaryContrast pb-4 pr-2">
      <div className="relative aspect-cardImage w-16 shrink-0">
        {!!item.image?.url && (
          <ImageWrapper
            src={item.image.url}
            alt={item.name}
            fill={true}
            sizes="(max-width: 480px) 20vw, (max-width: 1024px) 15vw, 10vw"
          />
        )}
      </div>
      <div className="ml-4 flex grow flex-col justify-between">
        <div className="flex flex-col">
          <Link href={InternalLinks.PRODUCT(item.permalink)}>
            <span className="text-primaryLightText hover:underline">
              {item.name}
            </span>
          </Link>
          <span className="font-bold">
            {item.selected_options
              .map(({ option_name }) => option_name)
              .join(", ")}
          </span>
        </div>

        <div className="flex justify-between">
          <div>
            <CardItemsCounter
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
