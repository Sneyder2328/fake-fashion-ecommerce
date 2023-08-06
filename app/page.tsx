import { HomeBlog } from "@/app/home/_components/blog/home-blog";
import { HomeCategoryGrid } from "@/app/home/_components/summary-categories/home-category-grid";
import { HomeFormOffer } from "@/app/home/_components/home-form-offer";
import { HomeOfferingList } from "@/app/home/_components/offerings/home-offering-list";
import { Suspense } from "react";
import { CategoryGridSkeleton } from "./home/_components/summary-categories/home-category-grid-skeleton";
import { HomeCategories } from "./home/_components/categories/home-categories";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pb-8 pt-8">
      <Suspense fallback={<CategoryGridSkeleton />}>
        <HomeCategoryGrid />
      </Suspense>
      <HomeOfferingList className="inner mt-4" />
      <div className="mt-4 h-[1px] w-full shadow" />
      <HomeCategories />
      <HomeFormOffer className="mt-14" />
      <HomeBlog className="inner mt-14" />
    </main>
  );
}
