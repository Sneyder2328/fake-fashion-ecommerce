"use client";

import { useSearchParams } from "next/navigation";
import { ProductGallery } from "./product-gallery";
import { ProductVariantOption } from "@chec/commerce.js/types/product-variant-group";
import React, { useState, useMemo } from "react";
import { AddToCart } from "./add-to-cart";
import { Asset } from "@chec/commerce.js/types/asset";
import { OptionPlusVariants } from "@/app/products/[permalink]/page";
import { Variant } from "@chec/commerce.js/types/variant";
import { ColorPicker } from "./color-picker";
import { SizePicker } from "./size-picker";
import { commerce } from "@/app/_lib/commerce";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type ColorImage = {
  colorOption: ProductVariantOption;
  image: Asset | undefined;
}[];

type Props = {
  productId: string;
  colorOptions: ProductVariantOption[] | undefined;
  sizeOptions: ProductVariantOption[] | undefined;
  variantsIndexedByColor: Record<string, OptionPlusVariants> | undefined;
  Reviews: React.ReactNode;
};

export function ProductMain({
  productId,
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
        opt.name.toLowerCase() === searchParams?.get("color")?.toLowerCase(),
    ) ?? colorOptions?.[0],
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
        opt.name.toLowerCase() === searchParams?.get("size")?.toLowerCase(),
    ) ?? defaultImplicitSizeOption,
  );

  const getVariantByColorAndSize = (
    colorOption: ProductVariantOption | undefined,
    sizeOption: ProductVariantOption | undefined,
  ): Variant | undefined => {
    if (variantsIndexedByColor && colorOption?.id && sizeOption?.id)
      return variantsIndexedByColor?.[colorOption.id]?.variants?.[
        sizeOption.id
      ];
  };

  const getVariantByColor = (
    colorOption: ProductVariantOption | undefined,
  ): Variant | undefined => {
    if (variantsIndexedByColor && colorOption?.id)
      return Object.values(
        variantsIndexedByColor[colorOption.id].variants,
      )?.[0];
  };

  const variantSelected:
    | (Variant & { isVariantAvailable?: boolean })
    | undefined = useMemo(() => {
    const variant = getVariantByColorAndSize(
      colorOptionSelected,
      sizeOptionSelected,
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
    },
  );

  const queryClient = useQueryClient();

  const addToCardMutation = useMutation({
    mutationFn: ({
      productId,
      variantSelectedId,
    }: {
      productId: string;
      variantSelectedId: string;
    }) => commerce.cart.add(productId, 1, variantSelectedId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const onAddToCart = () => {
    addToCardMutation.mutate({
      productId,
      variantSelectedId: variantSelected?.id ?? "",
    });
  };

  return (
    <div className="inner flex flex-col space-y-6 pb-6 pt-6 md:flex-row md:space-y-0">
      <div className="mx-auto w-11/12 md:w-1/2">
        {!!variantSelected?.assets && (
          <ProductGallery
            images={variantSelected.assets}
            variantId={variantSelected.id}
          />
        )}
      </div>
      <div className="relative w-11/12 pl-5 md:w-1/2">
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
            isLoading={addToCardMutation.isLoading}
            onClick={onAddToCart}
            price={variantSelected?.price?.formatted_with_symbol}
            isAvailable={variantSelected?.isVariantAvailable}
          />
          {Reviews}
        </div>
      </div>
    </div>
  );
}
