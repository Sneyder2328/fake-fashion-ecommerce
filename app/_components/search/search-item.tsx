import Link from "next/link";
import Image from "next/image";
import { Product } from "@chec/commerce.js/types/product";

import { InternalLinks } from "@/app/_lib/constants";

export function SearchItem({
  product,
  onHide,
}: {
  product: Product;
  onHide: () => void;
}) {
  return (
    <div className="flex">
      <Link href={InternalLinks.PRODUCT(product.permalink)} onClick={onHide} className="flex">
        {!!product.image?.url && (
          <Image
            src={product.image.url}
            alt={product.name}
            className="w-16"
            width={product.image.image_dimensions.width}
            height={product.image.image_dimensions.height}
          />
        )}
        <div className="ml-4 flex grow flex-col">
          <span className="text-slate-500 hover:underline">{product.name}</span>
          <span className="font-extrabold">
            {product.price.formatted_with_symbol}
          </span>
        </div>
      </Link>
    </div>
  );
}
