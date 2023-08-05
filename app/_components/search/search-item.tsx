import Link from "next/link";
import Image from "next/image";
import { Product } from "@chec/commerce.js/types/product";

import { InternalLinks } from "@/app/_lib/constants";

export function SearchItem({ product }: { product: Product }) {
  return (
    <div className="flex">
      {!!product.image?.url && (
        <img
          src={product.image.url}
          alt={product.name}
          className="w-16"
          width={product.image.image_dimensions.width}
          height={product.image.image_dimensions.height}
        />
      )}
      <div className="ml-4 flex grow flex-col">
        <Link
          href={InternalLinks.PRODUCT(product.permalink)}
          className="hover:underline"
        >
          <span className="text-slate-500">{product.name}</span>
        </Link>
        <span className="font-extrabold">
          {product.price.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
}
