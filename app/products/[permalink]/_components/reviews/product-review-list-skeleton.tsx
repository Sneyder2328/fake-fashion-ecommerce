import Skeleton from "react-loading-skeleton";

export function ProductReviewListSkeleton() {
  return (
    <div className="mt-0">
      <Skeleton />
      <Skeleton className="mt-8" />

      <div className="mt-6 space-y-6 border-b border-solid border-gray-200 pb-4">
        {Array(3)
          .fill(1)
          .map((_, i) => (
            <div key={i}>
              <Skeleton />
              <Skeleton count={2} />
            </div>
          ))}
      </div>
    </div>
  );
}
