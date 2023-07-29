"use client";

import { useSearchParams } from "next/navigation";
import { ProductGallery } from "./gallery";
import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
import { useState, useMemo } from "react";
import { AddToCart } from "./add-to-cart";
import { Asset } from "@chec/commerce.js/types/asset";
import { OptionPlusVariants } from "@/app/products/[permalink]/page";
import { Variant } from "@chec/commerce.js/types/variant";
import { ColorPicker } from "./color-picker";
import { SizePicker } from "./size-picker";

const createQueryString = (name: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  return params.toString();
};

export const replaceShallow = (key: string, value: string) =>
  history.replaceState(
    null,
    "",
    window.location.pathname + "?" + createQueryString(key, value)
  );

export type ColorImage = {
  colorOption: ProductVariantOption;
  image: Asset | undefined;
}[];

type Props = {
  colorOptions: ProductVariantOption[] | undefined;
  sizeOptions: ProductVariantOption[] | undefined;
  variantsIndexedByColor: Record<string, OptionPlusVariants> | undefined;
  Reviews: any;
};

export function ProductMain({
  colorOptions,
  sizeOptions,
  variantsIndexedByColor,
  Reviews,
}: Props) {
  const searchParams = useSearchParams()!;

  const [colorOptionSelected, setColorOptionSelected] = useState<
    ProductVariantOption | undefined
  >(
    colorOptions?.find(
      (opt) =>
        opt.name.toLowerCase() === searchParams?.get("color")?.toLowerCase()
    ) ?? colorOptions?.[0]
  );

  const defaultImplicitSizeOption = sizeOptions?.[0] && {
    ...sizeOptions[0],
    implicit: true,
  };

  const [sizeOptionSelected, setSizeOptionSelected] = useState<
    (ProductVariantOption & { implicit?: boolean }) | undefined
  >(
    sizeOptions?.find(
      (opt) =>
        opt.name.toLowerCase() === searchParams?.get("size")?.toLowerCase()
    ) ?? defaultImplicitSizeOption
  );

  const getVariantByColorAndSize = (
    colorOption: ProductVariantOption | undefined,
    sizeOption: ProductVariantOption | undefined
  ): Variant | undefined => {
    if (variantsIndexedByColor && colorOption?.id && sizeOption?.id)
      return variantsIndexedByColor?.[colorOption.id]?.variants?.[
        sizeOption.id
      ];
  };

  const getVariantByColor = (
    colorOption: ProductVariantOption | undefined
  ): Variant | undefined => {
    if (variantsIndexedByColor && colorOption?.id)
      return Object.values(
        variantsIndexedByColor[colorOption.id].variants
      )?.[0];
  };

  const variantSelected:
    | (Variant & { isVariantAvailable?: boolean })
    | undefined = useMemo(() => {
    const variant = getVariantByColorAndSize(
      colorOptionSelected,
      sizeOptionSelected
    );
    if (!variant) {
      return getVariantByColor(colorOptionSelected);
    }
    return { ...variant, isVariantAvailable: true };
  }, [variantsIndexedByColor, colorOptionSelected?.id, sizeOptionSelected?.id]);

  const colorImages: ColorImage | undefined = colorOptions?.map(
    (colorOption) => {
      const variant: Variant | undefined =
        getVariantByColorAndSize(colorOption, sizeOptionSelected) ??
        getVariantByColor(colorOption);
      return {
        image: variant?.assets?.[0],
        colorOption,
      };
    }
  );

  return (
    <div className="inner pt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 pb-6">
      <div className="w-11/12 mx-auto md:w-1/2">
        {!!variantSelected?.assets && (
          <ProductGallery images={variantSelected.assets} />
        )}
      </div>
      <div className="w-11/12 md:w-1/2 relative pl-5">
        <div className="flex flex-col">
          {!!colorImages && (
            <ColorPicker
              colorImages={colorImages}
              colorOptionSelected={colorOptionSelected}
              isAvailable={(colorOption) =>
                !!getVariantByColorAndSize(colorOption, sizeOptionSelected)
              }
              setColorOptionSelected={setColorOptionSelected}
            />
          )}

          {!!sizeOptions && (
            <SizePicker
              sizeOptions={sizeOptions}
              sizeOptionSelected={sizeOptionSelected}
              setSizeOptionSelected={setSizeOptionSelected}
              isAvailable={(sizeOption) =>
                !!getVariantByColorAndSize(colorOptionSelected, sizeOption)
              }
            />
          )}
          <AddToCart
            onClick={() => {
              console.log("clicked");
            }}
            price={variantSelected?.price?.formatted_with_symbol}
            isAvailable={variantSelected?.isVariantAvailable}
          />
          {Reviews}
        </div>
      </div>
    </div>
  );
}
