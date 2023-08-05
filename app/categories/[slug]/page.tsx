import { MainCategory } from "@/app/categories/[slug]/_components/main";
import { SectionHeader } from "@/app/_components/section-header";
import { ProductGridItemsSkeleton } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import { InternalLinks } from "@/app/_lib/constants";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `${slug.toUpperCase()} | MiSto - Fake fashion e-commerce store`,
    description: `${slug.toUpperCase()} Category at Fake fashion e-commerce store`,
  }
}

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
      <div className="inner py-6">
        <Suspense fallback={<ProductGridItemsSkeleton count={8}/>}>
          <MainCategory slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
