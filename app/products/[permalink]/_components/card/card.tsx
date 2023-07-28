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
          <img className="w-full" src={image?.url} alt={name} />
          {/* <Image
            className="w-full"
            // src={"https://cdn.chec.io/merchants/53309/assets/UKY07O8WzscwXx0W|1689886610995.jpg"}
            // src={"https://cdn.chec.io/merchants/19303/assets/9yI6YD9osPkZqmXC_Kitchen-Sink-Journal-1.jpg"}
            src={image.url}
            alt={name}
            // layout="fill"
            width={1333}
            height={2000}
          /> */}
          <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-black hover:opacity-20 transition-opacity duration-400" />
        </div>
        <span className="block text-xs font-medium text-gray-500 mt-3">
          {name}
        </span>
        <span className="block text-sm font-extrabold mt-[2px]">
          {price.formatted_with_symbol}
        </span>
      </div>
    </Link>
  );
}
