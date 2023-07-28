import { SectionHeader } from "@/app/layout/section-header";
import { ProductMain } from "@/app/products/[permalink]/_components/main";
import { RelatedProducts } from "@/app/products/[permalink]/_components/grid/related-products";
import commerce from "@/app/_lib/commerce";
import { InternalLinks, VariantGroups } from "@/app/_lib/constants";
import { Product } from "@chec/commerce.js/types/product";
import {
  ProductVariantGroup,
  ProductVariantOption,
} from "@chec/commerce.js/types/product-variant-group";
import { Variant } from "@chec/commerce.js/types/variant";
import { notFound } from "next/navigation";

function filterByName(name: string): (group: ProductVariantGroup) => boolean {
  return (group: ProductVariantGroup) => group.name === name;
}

export type OptionPlusVariants = ProductVariantOption & {
  variants: Record<string, Variant>;
};

export default async function ProductPage({
  params,
}: {
  params: { permalink: string };
}) {
  const { permalink } = params;
  const product: Product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  if (!product) return notFound();

  const variants: Variant[] = (await commerce.products.getVariants(product.id))
    ?.data;

  const {
    name,
    variant_groups,
    categories: [{ name: category }],
    related_products,
  } = product;

  const colorVariants: ProductVariantGroup | undefined = variant_groups.find(
    filterByName(VariantGroups.COLOR)
  );
  const sizeVariants: ProductVariantGroup | undefined = variant_groups.find(
    filterByName(VariantGroups.SIZE)
  );

  const variantsIndexedByColor: Record<string, OptionPlusVariants> | undefined =
    colorVariants?.options
      .map((option: ProductVariantOption) => {
        return {
          ...option,
          variants: variants
            .filter(
              (variant) => variant.options[colorVariants.id] === option.id
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
        {}
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
        colorOptions={colorVariants?.options}
        sizeOptions={sizeVariants?.options}
        variantsIndexedByColor={variantsIndexedByColor}
      />
      <RelatedProducts relatedProducts={related_products} className="inner" />
    </div>
  );
}
