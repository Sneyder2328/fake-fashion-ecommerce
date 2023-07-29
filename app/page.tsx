import { HomeBlog } from "@/app/home/_components/blog";
import { SummaryCategories } from "@/app/home/_components/summary-categories";
import { FormOffer } from "@/app/home/_components/form-offer";
import { HomeOfferings } from "@/app/home/_components/offerings";
import { Suspense } from "react";
import { GridCategoriesSkeleton } from "./home/_components/summary-categories/skeleton";
import { HomeCategories } from "./home/_components/categories";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pb-8 pt-8">
      <Suspense fallback={<GridCategoriesSkeleton />}>
        <SummaryCategories />
      </Suspense>
      <HomeOfferings className="inner mt-8" />
      <div className="mt-4 h-[1px] w-full shadow" />
      <HomeCategories />
      <FormOffer className="mt-14" />
      <HomeBlog className="inner mt-14" />
    </main>
  );
}
