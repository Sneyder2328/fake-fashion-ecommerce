import { HomeBlog } from "@/app/home/_components/blog";
import { SummaryCategories } from "@/app/home/_components/summary-categories";
import { FormOffer } from "@/app/home/_components/form-offer";
import { HomeOfferings } from "@/app/home/_components/offerings";
import { Suspense } from "react";
import { GridCategoriesSkeleton } from "./home/_components/summary-categories/skeleton";
import { HomeCategories } from "./home/_components/categories";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-8 pb-8">
      <Suspense fallback={<GridCategoriesSkeleton />}>
        <SummaryCategories />
      </Suspense>
      <HomeOfferings className="inner mt-8" />
      <div className="w-full h-[1px] shadow mt-4" />
      <HomeCategories />
      <FormOffer className="mt-14" />
      <HomeBlog className="inner mt-14" />
    </main>
  );
}
