import commerce, { wrapAsync } from "@/app/_lib/commerce";
import { HomeCategory } from "./category";
import { Suspense } from "react";
import { ProductGridItemsSkeleton } from "@/app/products/[permalink]/_components/grid/product-grid-items";

export async function HomeCategories() {
  const [categories] = await wrapAsync(
    commerce.categories.list({
      limit: 4,
    }),
  );

  if (!categories || !categories.data) return null;

  return (
    <div className="inner">
      {categories.data
        .reverse()
        .slice(0, 2)
        .map(({ id, slug }) => (
          <Suspense
            key={id}
            fallback={<ProductGridItemsSkeleton className="mt-14" />}
          >
            <HomeCategory className="mt-14" key={id} slug={slug} />
          </Suspense>
        ))}
    </div>
  );
}
