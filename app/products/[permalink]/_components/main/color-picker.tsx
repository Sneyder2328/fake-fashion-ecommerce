import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
import { ColorImage, replaceShallow } from ".";
import classNames from "classnames";

type ColorPickerProps = {
  colorOptionSelected: ProductVariantOption | undefined;
  setColorOptionSelected: (colorOption: ProductVariantOption) => void;
  colorImages: ColorImage;
  isAvailable: (colorOption: ProductVariantOption) => boolean;
};

export function ColorPicker({
  colorOptionSelected,
  setColorOptionSelected,
  colorImages,
  isAvailable,
}: ColorPickerProps) {
  return (
    <>
      <div className="flex">
        <span className="text-sm text-gray-500 font-semibold">COLOR:</span>
        <span className="text-sm text-gray-800 font-extrabold ml-1">
          {colorOptionSelected?.name}
        </span>
      </div>
      <div className="flex flex-wrap pt-1 -m-2">
        {colorImages.map(({ image, colorOption }) => (
          <img
            className={classNames(
              "w-10 border-solid border-2 hover:cursor-pointer mt-2 ml-2",
              {
                "border-gray-500": colorOption.id === colorOptionSelected?.id,
              },
              {
                "opacity-100": isAvailable(colorOption),
              },
              {
                "opacity-50": !isAvailable(colorOption),
                // !getVariantByColorAndSize(
                //   colorOption,
                //   sizeOptionSelected
                // ) && sizeOptionSelected.implicit !== true,
              }
            )}
            src={image?.url}
            key={image?.id}
            onClick={() => {
              setColorOptionSelected(colorOption);
              replaceShallow("color", colorOption.name);
            }}
          />
        ))}
      </div>
    </>
  );
}
