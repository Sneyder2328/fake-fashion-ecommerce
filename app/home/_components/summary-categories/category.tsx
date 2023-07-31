import classNames from "classnames";
import { InternalLinks } from "@/app/_lib/constants";
import Link from "next/link";
import { Category } from "@chec/commerce.js/types/category";
import { Asset } from "@chec/commerce.js/types/asset";
import Image from "next/image";

function BannerText({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={classNames(
        className,
        "bg-white pb-1 pl-4 pr-4 pt-1 text-2xl font-bold uppercase",
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
      className={classNames(
        category.className,
        "group relative hover:cursor-pointer",
      )}
    >
      <Link href={InternalLinks.CATEGORY(category.slug)} className="relative">
        <Image
          className="h-full w-full object-cover"
          src={category.assets[0].url}
          width={category.assets[0].image_dimensions.width}
          height={category.assets[0].image_dimensions.height}
          priority
          alt={category.name}
        />
        <div className="duration-400 absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity group-hover:opacity-30" />
        <BannerText
          text={category.name}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded"
        />
      </Link>
    </div>
  );
}
