import { ProductGridItems } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import commerce, { wrapAsync } from "@/app/_lib/commerce";

import { notFound } from "next/navigation";

type Props = {
  slug: string;
};
export async function MainCategory({ slug }: Props) {
  const [products] = await wrapAsync(commerce.products.list({
    category_slug: slug.toLowerCase(),
  }));
  
  if (!products || !products.data) return notFound();

  return (
    <ProductGridItems
      products={products.data.map(({ id, name, price, image, permalink }) => ({
        id,
        name,
        price,
        image,
        permalink,
      }))}
    />
  );
}
