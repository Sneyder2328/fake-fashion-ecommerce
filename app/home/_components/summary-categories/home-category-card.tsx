import { InternalLinks } from "@/app/_lib/constants";
import Link from "next/link";
import { Category } from "@chec/commerce.js/types/category";
import { Asset } from "@chec/commerce.js/types/asset";
import { ImageWrapper } from "@/app/_components/image-wrapper";
import { twMerge } from "tailwind-merge";

function BannerText({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={twMerge(
        "bg-primaryMain pb-1 pl-4 pr-4 pt-1 text-2xl font-bold uppercase text-primaryMainText",
        className,
      )}
    >
      {text}
    </div>
  );
}

export type CategoryProps = Pick<Category, "id" | "name" | "slug"> & {
  assets: Asset[] | undefined;
};

export function HomeCategory(category: CategoryProps & { className?: string }) {
  if (!category.assets?.[0]) return null;

  return (
    <div
      className={twMerge(
        "group relative aspect-square hover:cursor-pointer md:aspect-auto",
        category.className,
      )}
    >
      <Link
        href={InternalLinks.CATEGORY(category.slug)}
        className="relative block h-full w-full"
      >
        <ImageWrapper
          className="h-full w-full object-cover"
          src={category.assets[0].url}
          fill={true}
          priority
          alt={category.name}
        />
        <div className="duration-400 absolute left-0 top-0 h-full w-full bg-secondaryMain opacity-0 transition-opacity group-hover:opacity-30" />
        <BannerText
          text={category.name}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded"
        />
      </Link>
    </div>
  );
}
