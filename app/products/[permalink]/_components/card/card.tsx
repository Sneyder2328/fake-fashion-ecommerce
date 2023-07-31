import { Product } from "@chec/commerce.js/types/product";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type ProductDetails = Pick<
  Product,
  "id" | "name" | "permalink" | "price" | "image"
>;
type Props = ProductDetails & {
  className?: string;
};

export function ProductCard({
  name,
  permalink,
  price,
  image,
  className,
}: Props) {
  return (
    <Link href={`/products/${permalink}`}>
      <div className={twMerge("w-full", className)}>
        <div className="relative">
          {!!image && (
            <Image
              className="w-full"
              src={image.url}
              alt={name}
              width={image.image_dimensions.width}
              height={image.image_dimensions.height}
            />
          )}
          <div className="duration-400 absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-black opacity-0 transition-opacity hover:opacity-20" />
        </div>
        <span className="mt-3 block text-xs font-medium text-gray-500">
          {name}
        </span>
        <span className="mt-[2px] block text-sm font-extrabold">
          {price.formatted_with_symbol}
        </span>
      </div>
    </Link>
  );
}
