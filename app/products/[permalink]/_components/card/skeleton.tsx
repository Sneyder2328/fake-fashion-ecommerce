import Skeleton from "react-loading-skeleton";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export function CardSkeleton({ className }: Props) {
  return (
    <div className={twMerge("w-full", className)}>
      <div>
        <Skeleton className="h-96" />
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
