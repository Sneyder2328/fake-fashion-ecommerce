import { getCategories } from "@/app/_lib/commerce";
import { CategoryProps, HomeCategory } from "./home-category-card";

type Props = {};

export async function HomeCategoryGrid({}: Props) {
  const [cats] = await getCategories(4);

  if (!cats || !cats.data) return null;

  const categories: CategoryProps[] = cats.data
    .slice(0, 4)
    .reverse()
    .map(
      // @ts-ignore
      ({ id, name, slug, assets }) => ({
        id,
        name,
        slug,
        assets,
      }),
    );

  return (
    <div
      className={
        "inner grid grid-cols-1 grid-rows-2 gap-4 xs:grid-cols-2 md:aspect-[2/1] md:grid-cols-4"
      }
    >
      {!!categories?.[0] && (
        <HomeCategory
          {...categories[0]}
          className="md:col-span-2 md:row-span-2"
        />
      )}
      {!!categories?.[1] && (
        <HomeCategory {...categories[1]} />
      )}
      {!!categories?.[2] && (
        <HomeCategory {...categories[2]} />
      )}
      {!!categories?.[3] && (
        <HomeCategory
          {...categories[3]}
          className="md:col-span-2"
        />
      )}
    </div>
  );
}
