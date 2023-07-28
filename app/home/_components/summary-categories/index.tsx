import commerce from "@/app/_lib/commerce";
import { CategoryProps, HomeCategory } from "./category";

type Props = {};

export async function SummaryCategories({}: Props) {
  const data = await commerce.categories.list({
    limit: 4,
  });

  const categories: CategoryProps[] = data.data.reverse().map(
    // @ts-ignore
    ({ id, name, slug, assets }) => ({
      id,
      name,
      slug,
      assets,
    })
  );

  return (
    <div
      className={
        "inner grid grid-cols-1 xs:grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:max-h-96 xl:max-h-[480px] 2xl:max-h-[540px]"
      }
    >
      {!!categories?.[0] && (
        <HomeCategory
          {...categories[0]}
          className="md:col-span-2 md:row-span-2"
        />
      )}
      {!!categories?.[1] && <HomeCategory {...categories[1]} />}
      {!!categories?.[2] && <HomeCategory {...categories[2]} />}
      {!!categories?.[3] && (
        <HomeCategory {...categories[3]} className="md:col-span-2" />
      )}
    </div>
  );
}
