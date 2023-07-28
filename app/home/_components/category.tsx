import classNames from "classnames";
import Link from "next/link";
import { ProductGridItems } from "../../products/[permalink]/_components/grid/product-grid-items";
import { InternalLinks } from "@/app/_lib/constants";
import commerce from "@/app/_lib/commerce";

export async function HomeCategory({
  className,
  slug,
}: {
  slug: string;
  className?: string;
}) {
  const { data: products } = await commerce.products.list({
    category_slug: slug.toLowerCase(),
  });

  return (
    <div className={classNames(className)}>
      <h2 className="text-xl font-bold text-gray-800 uppercase">{slug}</h2>

      {!!products && (
        <ProductGridItems
          products={products.map(({ id, name, price, image, permalink }) => ({
            id,
            name,
            price,
            image,
            permalink,
          }))}
        />
      )}

      <Link href={InternalLinks.CATEGORY(slug)}>
        <button
          className={
            "w-full text-sm font-medium text-center text-gray-600 pt-2 pb-2 uppercase bg-gray-200 hover:bg-gray-300"
          }
        >
          See all
        </button>
      </Link>
    </div>
  );
}
