import { ImageWrapper } from "@/app/_components/image-wrapper";

export type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

export function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <div className="relative flex flex-col items-center">
      <ImageWrapper
        src={image}
        alt={title}
        minifyFactor={0.8}
        className="h-48 w-full object-cover"
        width={800}
        height={533}
      />
      <div className="absolute top-3/4 w-10/12 bg-white p-4">
        <h2 className="text-lg font-bold uppercase text-primaryMainText">
          {title}
        </h2>
        <p className="mt-2 text-sm font-semibold text-primaryLightText">
          {description}
        </p>
      </div>
    </div>
  );
}
