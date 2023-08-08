import { ImageWrapper } from "@/app/_components/image-wrapper";

export type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

export function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative aspect-[800/533] w-full object-cover">
        <ImageWrapper
          src={image}
          alt={title}
          fill={true}
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 30vw"
        />
      </div>
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
