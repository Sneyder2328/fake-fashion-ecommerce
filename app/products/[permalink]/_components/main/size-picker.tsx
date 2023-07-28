import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
import { replaceShallow } from ".";
import classNames from "classnames";

type PropsSizePicker = {
  sizeOptionSelected:
    | (ProductVariantOption & { implicit?: boolean })
    | undefined;
  sizeOptions: ProductVariantOption[];
  isAvailable: (sizeOption: ProductVariantOption) => boolean;
  setSizeOptionSelected: (sizeOption: ProductVariantOption) => void;
};

export function SizePicker({
  setSizeOptionSelected,
  sizeOptionSelected,
  sizeOptions,
  isAvailable,
}: PropsSizePicker) {
  return (
    <>
      <div className="mt-4">
        <span className="text-sm text-gray-500 font-semibold">SIZE:</span>
        <span className="text-sm text-gray-800 font-extrabold ml-1">
          {sizeOptionSelected?.implicit != true && sizeOptionSelected?.name}
        </span>
      </div>
      <ul className="flex flex-wrap pt-1 -m-2">
        {sizeOptions.map((sizeOption) => (
          <li
            key={sizeOption.id}
            onClick={() => {
              setSizeOptionSelected(sizeOption);
              replaceShallow("size", sizeOption.name);
            }}
            className={classNames(
              "border select-none border-solid text-xs mt-2 ml-2 text-gray-800 font-semibold pl-[15px] pr-[15px] pt-[5px] pb-[5px] rounded bg-gray-200 hover:cursor-pointer",
              {
                "border-gray-500":
                  sizeOption.id === sizeOptionSelected?.id &&
                  sizeOptionSelected.implicit != true,
              },
              {
                "opacity-100": isAvailable(sizeOption),
              },
              {
                "opacity-50": !isAvailable(sizeOption),
              }
            )}
          >
            {sizeOption.name}
          </li>
        ))}
      </ul>
    </>
  );
}
