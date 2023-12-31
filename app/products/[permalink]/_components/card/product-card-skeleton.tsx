import Skeleton from "react-loading-skeleton";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export function ProductCardSkeleton({ className }: Props) {
  return (
    <div className={twMerge("w-full", className)}>
      <div>
        <Skeleton className="w-full aspect-cardImage" />
      </div>
      <span className="block text-xs font-medium text-gray-500 mt-3">
        <Skeleton />
      </span>
      <span className="block text-sm font-extrabold mt-[2px]">
        <Skeleton />
      </span>
    </div>
  );
}
