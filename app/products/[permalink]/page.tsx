import { SectionHeader } from "@/app/layout/section-header";
import { ProductMain } from "@/app/products/[permalink]/_components/main";
import { RelatedProducts } from "@/app/products/[permalink]/_components/grid/related-products";
import { getProduct, getVariants } from "@/app/_lib/commerce";
import { InternalLinks, VariantGroups } from "@/app/_lib/constants";
import {
  ProductVariantGroup,
  ProductVariantOption,
} from "@chec/commerce.js/types/product-variant-group";
import { Variant } from "@chec/commerce.js/types/variant";
import { notFound } from "next/navigation";
import { ProductReviews } from "./_components/reviews";
import { Suspense } from "react";
import { ProductReviewsSkeleton } from "./_components/reviews/skeleton";

function filterByName(name: string): (group: ProductVariantGroup) => boolean {
  return (group: ProductVariantGroup) => group.name === name;
}

export type OptionPlusVariants = ProductVariantOption & {
  variants: Record<string, Variant>;
};

type Props = {
  params: { permalink: string };
};

export async function generateMetadata({ params: { permalink } }: Props) {
  const [product] = await getProduct(permalink);

  if (!product) return notFound();

  const hide = true; // hide to crawlers as this is a fake store

  return {
    title: `${
      product.seo.title || product.name
    } | MiSto - Fake fashion e-commerce store`,
    description: product.seo.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide,
      },
    },
    openGraph: product.image
      ? {
          images: [
            {
              url: product.image.url,
              width: product.image.image_dimensions.width,
              height: product.image.image_dimensions.height,
              alt: product.name,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({ params: { permalink } }: Props) {
  const [product] = await getProduct(permalink);

  if (!product) return notFound();

  const [dataVariants] = await getVariants(product.id);

  if (!dataVariants || !dataVariants.data) return notFound();

  const variants: Variant[] = dataVariants.data;

  const {
    name,
    variant_groups,
    categories: [{ name: category }],
    related_products,
  } = product;

  const colorVariants: ProductVariantGroup | undefined = variant_groups.find(
    filterByName(VariantGroups.COLOR),
  );
  const sizeVariants: ProductVariantGroup | undefined = variant_groups.find(
    filterByName(VariantGroups.SIZE),
  );

  const variantsIndexedByColor: Record<string, OptionPlusVariants> | undefined =
    colorVariants?.options
      .map((option: ProductVariantOption) => {
        return {
          ...option,
          variants: variants
            .filter(
              (variant) => variant.options[colorVariants.id] === option.id,
            )
            .reduce((acc: Record<string, Variant>, curr: Variant) => {
              sizeVariants && (acc[curr.options[sizeVariants.id]] = curr);
              return acc;
            }, {}),
        };
      })
      .reduce(
        (acc: Record<string, OptionPlusVariants>, curr: OptionPlusVariants) => {
          acc[curr.id] = curr;
          return acc;
        },
        {},
      );

  return (
    <div className="w-full pb-8">
      <SectionHeader
        title={name}
        permalink={permalink}
        items={[
          { name: "Home", url: InternalLinks.HOME },
          { name: category, url: InternalLinks.CATEGORY(category) },
          { name, url: permalink },
        ]}
      />
      <ProductMain
        productId={product.id}
        colorOptions={colorVariants?.options}
        sizeOptions={sizeVariants?.options}
        variantsIndexedByColor={variantsIndexedByColor}
        Reviews={
          <Suspense fallback={<ProductReviewsSkeleton />}>
            <ProductReviews permalink={permalink} />
          </Suspense>
        }
      />
      <RelatedProducts relatedProducts={related_products} className="inner" />
    </div>
  );
}
