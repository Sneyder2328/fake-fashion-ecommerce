import { HomeBlog } from "@/app/home/_components/blog";
import {
  CategoryProps,
  GridCategories,
} from "@/app/home/_components/grid-categories";
import { HomeCategory } from "@/app/home/_components/category";
import { FormOffer } from "@/app/home/_components/form-offer";
import { HomeOfferings } from "@/app/home/_components/offerings";
import { Suspense } from "react";
import { GridCategoriesSkeleton } from "./home/_components/grid-categories/skeleton";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-8 pb-8">
      {/* <GridCategoriesSkeleton /> */}
      <Suspense fallback={<GridCategoriesSkeleton />}>
        <GridCategories
        // categories={
        //   // @ts-ignore
        //   categories.reverse().map(({ id, name, slug, assets }) => ({
        //     id,
        //     name,
        //     slug,
        //     assets,
        //   }))
        // }
        />
      </Suspense>
      <HomeOfferings className="inner mt-8" />
      <div className="w-full h-[1px] shadow mt-4" />
      {/* {categories.slice(0, 2).map(({ id, slug }) => (
        <HomeCategory className="inner mt-14" key={id} slug={slug} />
      ))} */}
      <FormOffer className="mt-14" />
      <HomeBlog className="inner mt-14" />
    </main>
  );
}
