import Skeleton from "react-loading-skeleton";

export function CartItemSkeleton() {
  return (
    <div className="flex">
      <Skeleton className="h-24 w-16" />
      <div className="ml-4 flex grow flex-col justify-between">
        <Skeleton count={2} />
        <Skeleton />
      </div>
    </div>
  );
}
