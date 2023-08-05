import classNames from "classnames";
import { Scrollbar } from "react-scrollbars-custom";
import { ProductGalleryProps } from "./gallery";
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
        {images.map(({ id, url, image_dimensions }, i) => (
          <ImageWrapper
            key={id}
            src={url}
            width={image_dimensions.width}
            height={image_dimensions.height}
            alt={id}
            className={classNames(
              "mb-3 h-[105px] w-full border-2 border-solid hover:cursor-pointer",
              {
                "border-gray-500 opacity-100": i === indexSlide,
              },
              {
                "opacity-50": i !== indexSlide,
              },
            )}
            onMouseEnter={() => goToSlide(i)}
          />
        ))}
      </Scrollbar>
    </div>
  );
}
