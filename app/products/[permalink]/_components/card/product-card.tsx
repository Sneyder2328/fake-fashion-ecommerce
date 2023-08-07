import { ImageWrapper } from "@/app/_components/image-wrapper";
import { Product } from "@chec/commerce.js/types/product";
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
        <div className="bg-gray relative aspect-cardImage">
          {!!image && (
            <ImageWrapper
              fill={true}
              src={image.url}
              alt={name}
            />
          )}
          <div className="duration-400 absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-black opacity-0 transition-opacity hover:opacity-20" />
        </div>
        <span className="mt-3 block text-xs font-medium text-primaryLightText">
          {name}
        </span>
        <span className="mt-[2px] block text-sm font-extrabold">
          {price.formatted_with_symbol}
        </span>
      </div>
    </Link>
  );
}
