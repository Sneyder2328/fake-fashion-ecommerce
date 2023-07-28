import { MainCategory } from "@/app/categories/[slug]/_components/main";
import { SectionHeader } from "@/app/layout/section-header";
import { ProductGridItems } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import commerce from "@/app/_lib/commerce";
import { InternalLinks } from "@/app/_lib/constants";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default function Category({ params: { slug } }: Props) {
  // const { data: products } = await commerce.products.list({
  //   category_slug: slug.toLowerCase(),
  // });

  // if (!products) return notFound();

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
        <Suspense fallback={<ProductGridItems products={undefined} />}>
          <MainCategory slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
