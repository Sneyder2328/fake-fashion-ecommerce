import { ProductGridItems } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import { getProductsByCategory } from "@/app/_lib/commerce";

import { notFound } from "next/navigation";
import { LoadMoreProducts } from "./load-more";

type Props = {
  slug: string;
};
export async function MainCategory({ slug }: Props) {
  const [products] = await getProductsByCategory(slug, 12);

  if (!products || !products.data) return notFound();

  return (
    <>
      <ProductGridItems
        products={products.data.map(
          ({ id, name, price, image, permalink }) => ({
            id,
            name,
            price,
            image,
            permalink,
          }),
        )}
      />
      <LoadMoreProducts categorySlug={slug} />
    </>
  );
}
