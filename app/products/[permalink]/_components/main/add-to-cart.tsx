import { Button } from "@/app/_components/button";
import { LoadingSpinner } from "@/app/_components/loading-spinner";
import classNames from "classnames";

type Props = {
  price?: string;
  isLoading?: boolean;
  isAvailable?: boolean;
  onClick: React.MouseEventHandler;
};
export function AddToCart({ price, isAvailable, isLoading, onClick }: Props) {
  const textBtn = isAvailable === true ? "Add to cart" : "Sold out";

  return (
    <div className="my-6 flex items-center space-x-4 border-b border-t border-solid border-gray-200 py-4">
      <span className="text-base font-bold">
        {isAvailable === true && !!price && price}
      </span>
      <Button
        disabled={isAvailable !== true}
        onClick={onClick}
        className={classNames(
          {
            "bg-gray-600 hover:cursor-not-allowed": isAvailable !== true,
          },
          {
            "bg-gray-800 hover:bg-gray-600": isAvailable === true,
          },
        )}
      >
        {isLoading === false && textBtn}
        {isLoading === true && <LoadingSpinner size={16} />}
      </Button>
    </div>
  );
}
