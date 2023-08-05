import classNames from "classnames";
import Link from "next/link";
import { ProductGridItems } from "../../../products/[permalink]/_components/grid/product-grid-items";
import { InternalLinks } from "@/app/_lib/constants";
import { getProductsByCategory } from "@/app/_lib/commerce";

export async function HomeCategory({
  className,
  slug,
}: {
  slug: string;
  className?: string;
}) {
  const [products] = await getProductsByCategory(slug, 8);

  if (!products || !products.data) return null;

  return (
    <div className={classNames(className)}>
      <h2 className="text-xl font-bold uppercase text-gray-800">{slug}</h2>

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
      <Link href={InternalLinks.CATEGORY(slug)}>
        <button
          className={
            "w-full bg-primaryContrast pb-2 pt-2 text-center text-sm font-medium uppercase text-gray-600 hover:bg-gray-300 mt-6"
          }
        >
          See all
        </button>
      </Link>
    </div>
  );
}
