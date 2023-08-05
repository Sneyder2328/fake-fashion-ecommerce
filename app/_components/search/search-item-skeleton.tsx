import Skeleton from "react-loading-skeleton";

export function SearchItemSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div className="flex" key={i}>
            <Skeleton className="h-24 w-16" />
            <div className="ml-4 flex grow flex-col justify-between">
              <Skeleton count={2} />
              <Skeleton />
            </div>
          </div>
        ))}
    </>
  );
}
