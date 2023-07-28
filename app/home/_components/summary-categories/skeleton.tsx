import Skeleton from "react-loading-skeleton";

export function GridCategoriesSkeleton() {
  return (
    <div
      className={
        "inner grid grid-cols-1 xs:grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:max-h-96 xl:max-h-[480px] 2xl:max-h-[540px] h-screen"
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
