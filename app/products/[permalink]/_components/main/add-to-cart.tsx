import classNames from "classnames";

type Props = {
  price?: string;
  isAvailable?: boolean;
  onClick: React.MouseEventHandler;
};
export function AddToCart({ price, isAvailable, onClick }: Props) {
  return (
    <div className="my-6 py-4 border-t border-b border-solid border-gray-200 flex items-center space-x-4">
      <span className="font-bold text-base">
        {isAvailable === true && !!price && price}
      </span>
      <button
        disabled={isAvailable !== true}
        onClick={onClick}
        className={classNames(
          "uppercase text-xs font-light text-white py-[10px] px-5",
          {
            "bg-gray-600 hover:cursor-not-allowed": isAvailable !== true,
          },
          {
            "bg-gray-800 hover:bg-gray-600": isAvailable === true,
          }
        )}
      >
        {isAvailable === true ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}
