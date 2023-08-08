"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Fade, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ImageIndicators } from "./image-indicators";
import { ImageWrapper } from "@/app/_components/image-wrapper";

export type ProductGalleryProps = {
  images: {
    id: string;
    url: string;
    image_dimensions: {
      width: number;
      height: number;
    };
  }[];
  variantId: string;
};

export function ProductGallery({ images, variantId }: ProductGalleryProps) {
  const [index, setIndex] = React.useState(0);

  const slideRef = React.useRef<SlideshowRef>(null);

  const properties = {
    prevArrow: (
      <div className="ml-4 select-none rounded-full bg-white p-2">
        <ChevronLeftIcon className="w-5 text-gray-500" />
      </div>
    ),
    nextArrow: (
      <div className="mr-4 select-none rounded-full bg-white p-2">
        <ChevronRightIcon className="w-5 text-gray-500" />
      </div>
    ),
  };

  useEffect(() => {
    // update index each time a different product variant is selected
    slideRef.current?.goTo(0);
    setIndex(0);
  }, [variantId]);

  return (
    <div className="flex justify-between">
      <div className="relative lg:min-w-[80px]">
        <ImageIndicators
          images={images}
          indexSlide={index}
          goToSlide={(i) => {
            console.log("go to slide", i);
            slideRef.current?.goTo(i);
          }}
        />
      </div>
      <div className="w-full lg:w-[calc(100%-100px)]">
        <Fade
          {...properties}
          key={variantId}
          defaultIndex={0}
          ref={slideRef}
          autoplay={false}
          infinite={true}
          canSwipe={false}
          transitionDuration={130}
          onStartChange={(_, to) => setIndex(to)}
        >
          {images.map(({ id, url }) => (
            <div key={id} className="pl-[1px] pr-[1px]">
              <Zoom>
                <div className="relative aspect-cardImage w-full">
                  <ImageWrapper
                    src={url}
                    className="w-full select-none"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw"
                    alt={id}
                    fill={true}
                    priority
                  />
                </div>
              </Zoom>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
