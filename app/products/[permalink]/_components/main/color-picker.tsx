import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
import { ColorImage } from ".";
import classNames from "classnames";
import { ImageWrapper } from "@/app/_components/image-wrapper";
import { replaceShallow } from "@/app/_lib/utils";

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
            <div
              key={image!.id}
              className={classNames(
                "relative ml-2 mt-2 aspect-cardImage w-10 border-2 border-solid hover:cursor-pointer",
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
            >
              <ImageWrapper
                className={"h-full"}
                src={image!.url}
                sizes="(max-width: 640px) 14vw, 7vw"
                fill={true}
                onClick={() => {
                  setColorOptionSelected(colorOption);
                  replaceShallow("color", colorOption.name);
                }}
                alt={colorOption.name}
              />
            </div>
          ))}
      </div>
    </>
  );
}
