import Skeleton from "react-loading-skeleton";

export function CategoryGridSkeleton() {
  return (
    <div
      className={
        "inner grid grid-cols-1 grid-rows-2 gap-4 xs:grid-cols-2 md:aspect-[2/1] md:grid-cols-4"
      }
    >
      <Skeleton
        className="h-full"
        containerClassName="h-full md:col-span-2 md:row-span-2"
      />
      <Skeleton className="h-full" containerClassName="h-full" />
      <Skeleton className="h-full" containerClassName="h-full" />
      <Skeleton className="h-full" containerClassName="h-full md:col-span-2" />
    </div>
  );
}
