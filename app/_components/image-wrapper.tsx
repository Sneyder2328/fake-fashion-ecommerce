import Image, { ImageProps } from "next/image";

type Props = {
  minifyDimensions?: boolean;
  minifyFactor?: number;
  width: number;
  height: number;
} & Omit<ImageProps, "width" | "height">;

/**
 * Note: When using next/image in local env, it will throw an error trying to load the commerce.js images.
 * So this Image Wrapper helps to load the images in local env.
 * In server env, it will load the images normally using next/image.
 * @param props
 * @returns img or Image component depending on env
 */
export function ImageWrapper({
  minifyDimensions = true,
  minifyFactor = 0.5,
  width,
  height,
  ...rest
}: Props) {
  let minifiedWidth, minifiedHeight;
  if (minifyDimensions) {
    minifiedWidth = Math.round(width * minifyFactor);
    minifiedHeight = Math.round(height * minifyFactor);
  }

  if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    return <img {...rest} />;
  }
  return (
    <Image
      {...rest}
      width={minifiedWidth || width}
      height={minifiedHeight || height}
    />
  );
}
