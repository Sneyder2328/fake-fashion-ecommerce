import classNames from "classnames";
import { InternalLinks } from "@/app/_lib/constants";
import Link from "next/link";
import { Category } from "@chec/commerce.js/types/category";
import { Asset } from "@chec/commerce.js/types/asset";

function BannerText({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={classNames(
        className,
        "uppercase text-2xl font-bold bg-white pt-1 pb-1 pl-4 pr-4"
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
  return (
    <div
      className={classNames(
        category.className,
        "relative hover:cursor-pointer group"
      )}
    >
      <Link href={InternalLinks.CATEGORY(category.slug)}>
        <img
          src={category.assets?.[0].url}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black group-hover:opacity-30 transition-opacity duration-400" />
        <BannerText
          text={category.name}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded"
        />
      </Link>
    </div>
  );
}
