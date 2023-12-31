import classNames from "classnames";
import { Scrollbar } from "react-scrollbars-custom";
import { ProductGalleryProps } from "./product-gallery";
import { trackYStyle } from "@/app/_lib/styles";
import { ImageWrapper } from "@/app/_components/image-wrapper";

type ImageIndicatorsProps = {
  indexSlide: number;
  goToSlide: (index: number) => void;
} & Pick<ProductGalleryProps, "images">;

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
              i === indexSlide ? "border-gray-500 opacity-100" : "opacity-50",
            )}
          >
            <ImageWrapper
              src={url}
              className="h-full"
              fill={true}
              sizes="7vw"
              alt={id}
              onMouseEnter={() => goToSlide(i)}
            />
          </div>
        ))}
      </Scrollbar>
    </div>
  );
}
