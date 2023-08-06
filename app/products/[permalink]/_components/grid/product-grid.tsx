import { twMerge } from "tailwind-merge";
import { ProductCard, ProductDetails } from "../card/product-card";
import { ProductCardSkeleton } from "@/app/products/[permalink]/_components/card/product-card-skeleton";

export function ProductGridSkeleton({
  className,
  count = 4,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 gap-6 py-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {Array(count)
        .fill(1)
        .map((v) => (
          <ProductCardSkeleton key={v} />
        ))}
    </div>
  );
}

type Props = {
  products: ProductDetails[] | undefined;
};
export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 py-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
