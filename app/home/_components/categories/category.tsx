import classNames from "classnames";
import Link from "next/link";
import { ProductGridItems } from "../../../products/[permalink]/_components/grid/product-grid-items";
import { InternalLinks } from "@/app/_lib/constants";
import commerce, { wrapAsync } from "@/app/_lib/commerce";

export async function HomeCategory({
  className,
  slug,
}: {
  slug: string;
  className?: string;
}) {
  const [products] = await wrapAsync(
    commerce.products.list({
      category_slug: slug.toLowerCase(),
    }),
  );

  return (
    <div className={classNames(className)}>
      <h2 className="text-xl font-bold uppercase text-gray-800">{slug}</h2>

      {!!products && (
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
      )}

      <Link href={InternalLinks.CATEGORY(slug)}>
        <button
          className={
            "w-full bg-gray-200 pb-2 pt-2 text-center text-sm font-medium uppercase text-gray-600 hover:bg-gray-300"
          }
        >
          See all
        </button>
      </Link>
    </div>
  );
}
