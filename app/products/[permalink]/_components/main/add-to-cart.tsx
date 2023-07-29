import classNames from "classnames";

type Props = {
  price?: string;
  isAvailable?: boolean;
  onClick: React.MouseEventHandler;
};
export function AddToCart({ price, isAvailable, onClick }: Props) {
  return (
    <div className="my-6 flex items-center space-x-4 border-b border-t border-solid border-gray-200 py-4">
      <span className="text-base font-bold">
        {isAvailable === true && !!price && price}
      </span>
      <button
        disabled={isAvailable !== true}
        onClick={onClick}
        className={classNames(
          "px-5 py-[10px] text-xs font-light uppercase text-white",
          {
            "bg-gray-600 hover:cursor-not-allowed": isAvailable !== true,
          },
          {
            "bg-gray-800 hover:bg-gray-600": isAvailable === true,
          },
        )}
      >
        {isAvailable === true ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}
