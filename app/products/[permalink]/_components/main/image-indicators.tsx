import classNames from "classnames";
import { Scrollbar } from "react-scrollbars-custom";
import { ProductGalleryProps } from "./product-gallery";
import { trackYStyle } from "@/app/_lib/styles";
import { ImageWrapper } from "@/app/_components/image-wrapper";

type ImageIndicatorsProps = {
  indexSlide: number;
  goToSlide: (index: number) => void;
} & ProductGalleryProps;

export function ImageIndicators({
  indexSlide,
  goToSlide,
  images,
}: ImageIndicatorsProps) {
  return (
    <div className="hidden flex-col space-y-4 lg:absolute lg:flex lg:h-full lg:w-full lg:overflow-y-auto">
      <Scrollbar
        style={{ width: 80, height: "100%" }}
        noScrollX={true}
        trackYProps={{ style: trackYStyle }}
      >
        {images.map(({ id, url }, i) => (
          <div
            key={id}
            className={classNames(
              "relative mb-3 aspect-cardImage w-full border-2 border-solid hover:cursor-pointer",
              {
                "border-gray-500 opacity-100": i === indexSlide,
              },
              {
                "opacity-50": i !== indexSlide,
              },
            )}
          >
            <ImageWrapper
              src={url}
              className="h-full"
              fill={true}
              alt={id}
              onMouseEnter={() => goToSlide(i)}
            />
          </div>
        ))}
      </Scrollbar>
    </div>
  );
}
