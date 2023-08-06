"use client";

// @ts-ignore
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ProductCard, ProductDetails } from "../card/product-card";

type Props = {
  relatedProducts: ProductDetails[];
  className?: string;
};
export function RelatedProductList({ relatedProducts, className }: Props) {
  const slideRef = React.useRef<SlideshowRef>(null);

  return (
    <div className={twMerge("flex flex-col py-6", className)}>
      <div className="w-full flex justify-between items-center py-4">
        <h2 className="text-xl font-bold uppercase">Related Products</h2>
        <div className="flex items-center space-x-2">
          <ChevronLeftIcon
            className="w-5 text-gray-500 hover:cursor-pointer"
            onClick={() => slideRef.current?.goBack()}
          />
          <ChevronRightIcon
            className="w-5 text-gray-500 hover:cursor-pointer"
            onClick={() => slideRef.current?.goNext()}
          />
        </div>
      </div>
      <div className="-mx-4">
        <Slide
          ref={slideRef}
          slidesToScroll={1}
          slidesToShow={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
          infinite={true}
          transitionDuration={200}
          autoplay={false}
          arrows={false}
        >
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} className={"px-4"} />
          ))}
        </Slide>
      </div>
    </div>
  );
}
