import { InternalLinks } from "@/app/_lib/constants";
import {
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function Item({ name, url }: { name: string; url: string }) {
  return (
    <li className="text-[0.92rem] font-semibold">
      <Link href={url}>{name}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="flex h-14 w-full shrink-0 justify-center bg-white shadow">
      <div className="inner flex h-full items-center justify-between">
        <Link href={InternalLinks.HOME}>
          <h1 className="font-serif text-2xl font-extrabold text-black">
            MiSto
          </h1>
        </Link>
        <ul className="hidden space-x-4 lg:flex">
          <Item name="About Us" url="/" />
          <Item name="Women" url={InternalLinks.CATEGORY("women")} />
          <Item name="Men" url={InternalLinks.CATEGORY("men")} />
          <Item name="Beauty" url={InternalLinks.CATEGORY("beauty")} />
          <Item name="Kids" url={InternalLinks.CATEGORY("kids")} />
          <Item name="Blog" url={"/"} />
          <Item name="Contact" url={"/"} />
        </ul>
        <div className="flex space-x-4">
          <MagnifyingGlassIcon className="w-5" />
          <GlobeAmericasIcon className="w-5" />
          <UserIcon className="w-5" />
          <ShoppingBagIcon className="w-5" />
        </div>
      </div>
    </div>
  );
}
