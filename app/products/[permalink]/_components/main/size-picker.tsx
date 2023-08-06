import { replaceShallow } from "@/app/_lib/utils";
import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
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
        <span className="text-sm font-semibold text-gray-500">SIZE:</span>
        <span className="ml-1 text-sm font-extrabold text-gray-800">
          {sizeOptionSelected?.implicit != true && sizeOptionSelected?.name}
        </span>
      </div>
      <ul className="-m-2 flex flex-wrap pt-1">
        {sizeOptions.map((sizeOption) => (
          <li
            key={sizeOption.id}
            onClick={() => {
              setSizeOptionSelected(sizeOption);
              replaceShallow("size", sizeOption.name);
            }}
            className={classNames(
              "ml-2 mt-2 select-none rounded border border-solid bg-gray-200 pb-[5px] pl-[15px] pr-[15px] pt-[5px] text-xs font-semibold text-gray-800 hover:cursor-pointer",
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
              },
            )}
          >
            {sizeOption.name}
          </li>
        ))}
      </ul>
    </>
  );
}
