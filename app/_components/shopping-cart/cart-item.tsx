import { LineItem } from "@chec/commerce.js/types/line-item";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { InternalLinks } from "@/app/_lib/constants";
import Image from "next/image";
import { Counter } from "./items-counter";


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
    <div className="flex border-b-[2px] border-b-[#f8f8f8] pb-4">
      {!!item.image?.url && (
        <Image
          src={item.image.url}
          alt={item.name}
          className="w-16"
          width={item.image.image_dimensions.width}
          height={item.image.image_dimensions.height}
        />
      )}
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