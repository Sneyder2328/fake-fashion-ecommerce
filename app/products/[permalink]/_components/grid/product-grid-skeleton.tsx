import { twMerge } from "tailwind-merge";
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
