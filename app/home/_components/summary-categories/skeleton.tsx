import Skeleton from "react-loading-skeleton";

export function GridCategoriesSkeleton() {
  return (
    <div
      className={
        "inner grid h-screen grid-cols-1 grid-rows-2 gap-4 xs:grid-cols-2 md:max-h-96 md:grid-cols-4 xl:max-h-[480px] 2xl:max-h-[540px]"
      }
    >
      <Skeleton
        className="h-full"
        containerClassName="md:col-span-2 md:row-span-2 h-full"
      />
      <Skeleton className="h-full" containerClassName="h-full" />
      <Skeleton className="h-full" containerClassName="h-full" />
      <Skeleton className="h-full" containerClassName="md:col-span-2 h-full" />
    </div>
  );
}
