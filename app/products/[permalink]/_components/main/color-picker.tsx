import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
import { ColorImage, replaceShallow } from ".";
import classNames from "classnames";
import Image from "next/image";

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
        <span className="text-sm font-semibold text-gray-500">COLOR:</span>
        <span className="ml-1 text-sm font-extrabold text-gray-800">
          {colorOptionSelected?.name}
        </span>
      </div>
      <div className="-m-2 flex flex-wrap pt-1">
        {colorImages
          .filter(({ image }) => !!image)
          .map(({ image, colorOption }) => (
            <Image
              className={classNames(
                "ml-2 mt-2 w-10 border-2 border-solid hover:cursor-pointer",
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
                },
              )}
              src={image!.url}
              width={image!.image_dimensions.width}
              height={image!.image_dimensions.height}
              key={image!.id}
              onClick={() => {
                setColorOptionSelected(colorOption);
                replaceShallow("color", colorOption.name);
              }}
              alt={colorOption.name}
            />
          ))}
      </div>
    </>
  );
}
