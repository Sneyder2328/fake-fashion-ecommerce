import { ProductGridItems } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import commerce from "@/app/_lib/commerce";

import { notFound } from "next/navigation";

type Props = {
  slug: string;
};
export async function MainCategory({ slug }: Props) {
  const { data: products } = await commerce.products.list({
    category_slug: slug.toLowerCase(),
  });

  if (!products) return notFound();

  return (
    <ProductGridItems
      products={products.map(({ id, name, price, image, permalink }) => ({
        id,
        name,
        price,
        image,
        permalink,
      }))}
    />
  );
}
