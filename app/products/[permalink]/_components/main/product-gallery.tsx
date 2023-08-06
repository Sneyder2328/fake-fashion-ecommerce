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
};

export function ProductGallery({ images }: ProductGalleryProps) {
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
    // this is for the edge case in which images list was updated but last slider index was at a position not valid for the new images list
    index >= images.length && slideRef.current?.goTo(0);
  }, [images.length, index]);

  return (
    <div className="flex justify-between">
      <div className="relative lg:min-w-[80px]">
        <ImageIndicators
          images={images}
          indexSlide={index}
          goToSlide={(i) => slideRef.current?.goTo(i)}
        />
      </div>
      <div className="w-full lg:w-[calc(100%-100px)]">
        <Fade
          {...properties}
          defaultIndex={0}
          ref={slideRef}
          autoplay={false}
          infinite={false}
          canSwipe={false}
          transitionDuration={130}
          onStartChange={(_, to) => setIndex(to)}
        >
          {images.map(({ id, url, image_dimensions: { width, height } }) => (
            <div key={id} className="pl-[1px] pr-[1px]">
              <Zoom>
                <ImageWrapper
                  src={url}
                  className="w-full select-none"
                  minifyDimensions={false}
                  alt={id}
                  priority
                  width={width}
                  height={height}
                />
              </Zoom>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
