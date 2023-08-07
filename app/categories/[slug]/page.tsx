import { CategoryMain } from "@/app/categories/[slug]/_components/category-main";
import { SectionHeader } from "@/app/_components/section-header/section-header";
import { InternalLinks } from "@/app/_lib/constants";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/app/products/[permalink]/_components/grid/product-grid-skeleton";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const hide = true;
  return {
    title: slug.toUpperCase(),
    description: `${slug.toUpperCase()} Category at Fake fashion e-commerce store`,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide,
      },
    },
  };
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
        <Suspense fallback={<ProductGridSkeleton count={8} />}>
          <CategoryMain slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
