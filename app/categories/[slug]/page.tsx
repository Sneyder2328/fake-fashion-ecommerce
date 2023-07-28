import { MainCategory } from "@/app/categories/[slug]/_components/main";
import { SectionHeader } from "@/app/layout/section-header";
import { ProductGridItemsSkeleton } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import { InternalLinks } from "@/app/_lib/constants";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default function Category({ params: { slug } }: Props) {
  return (
    <div>
      <SectionHeader
        title={slug.toUpperCase()}
        permalink={InternalLinks.CATEGORY(slug)}
        items={[
          { name: "Home", url: InternalLinks.HOME },
          {
            name: slug.toUpperCase()[0] + slug.slice(1),
            url: InternalLinks.CATEGORY(slug),
          },
        ]}
      />
      <div className="inner">
        <Suspense fallback={<ProductGridItemsSkeleton />}>
          <MainCategory slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
