import Link from "next/link";
import { Product } from "@chec/commerce.js/types/product";

import { InternalLinks } from "@/app/_lib/constants";
import { ImageWrapper } from "../image-wrapper";

export function SearchItem({
  product,
  onHide,
}: {
  product: Product;
  onHide: () => void;
}) {
  return (
    <div className="flex">
      <Link
        href={InternalLinks.PRODUCT(product.permalink)}
        onClick={onHide}
        className="flex w-full py-2 hover:bg-primaryContrast"
      >
        <div className="relative aspect-cardImage w-16 shrink-0">
          {!!product.image?.url && (
            <ImageWrapper
              src={product.image.url}
              alt={product.name}
              sizes="(max-width: 480px) 20vw, (max-width: 1024px) 15vw, 10vw"
              fill={true}
            />
          )}
        </div>
        <div className="ml-4 flex grow flex-col">
          <span className="text-primaryLightText hover:underline">
            {product.name}
          </span>
          <span className="font-extrabold">
            {product.price.formatted_with_symbol}
          </span>
        </div>
      </Link>
    </div>
  );
}
