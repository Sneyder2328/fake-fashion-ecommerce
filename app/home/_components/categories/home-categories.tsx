import { getCategories } from "@/app/_lib/commerce";
import { HomeCategory } from "./home-category";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/app/products/[permalink]/_components/grid/product-grid-skeleton";

export async function HomeCategories() {
  const [categories] = await getCategories(4);

  if (!categories || !categories.data) return null;

  return (
    <div className="inner">
      {categories.data
        .slice(2, 4)
        .reverse()
        .map(({ id, slug }) => (
          <Suspense
            key={id}
            fallback={<ProductGridSkeleton className="mt-14" />}
          >
            <HomeCategory className="mt-14" key={id} slug={slug} />
          </Suspense>
        ))}
    </div>
  );
}
