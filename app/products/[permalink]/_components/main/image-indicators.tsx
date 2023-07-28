import classNames from "classnames";
import { Scrollbar } from "react-scrollbars-custom";
import { ProductGalleryProps } from "./gallery";

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
    <div className="hidden lg:overflow-y-auto lg:w-full lg:h-full lg:absolute lg:flex flex-col space-y-4">
      <Scrollbar
        style={{ width: 80, height: "100%" }}
        noScrollX={true}
        trackYProps={{
          style: {
            width: 7,
            top: 0,
          },
        }}
      >
        {images.map(({ id, url }, i) => (
          <img
            key={id}
            src={url}
            className={classNames(
              "w-full hover:cursor-pointer border-solid border-2 mb-3 h-[105px]",
              {
                "border-gray-500 opacity-100": i === indexSlide,
              },
              {
                "opacity-50": i !== indexSlide,
              }
            )}
            onMouseEnter={() => goToSlide(i)}
          />
        ))}
      </Scrollbar>
    </div>
  );
}
