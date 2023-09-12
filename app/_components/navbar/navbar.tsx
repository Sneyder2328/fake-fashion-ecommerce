"use client";

import { InternalLinks } from "@/app/_lib/constants";
import Link from "next/link";
import { NavbarActions } from "./navbar-actions";
import { useState } from "react";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";

function Item({
  name,
  url,
  onClick,
}: {
  name: string;
  url: string;
  onClick: () => void;
}) {
  const pathname = usePathname();

  return (
    <li
      className={classNames(
        "flex h-full items-center text-base font-semibold text-primaryMainText hover:text-primaryLightText lg:relative lg:text-[0.92rem]",
        {
          "lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:h-[2px] lg:after:w-11/12 lg:after:-translate-x-1/2 lg:after:bg-secondaryMain lg:after:content-['']":
            pathname === url,
        },
      )}
      onClick={onClick}
    >
      <Link href={url}>{name}</Link>
    </li>
  );
}

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>();

  return (
    <div className="relative flex h-14 w-full shrink-0 justify-center bg-primaryMain shadow">
      <div className="inner flex h-full items-center justify-between">
        <Link href={InternalLinks.HOME}>
          <h1 className="font-serif text-2xl font-extrabold text-primaryMainText">
            MiSto
          </h1>
        </Link>
        <ul
          className={classNames(
            "absolute left-0 top-14 z-10 w-full transform space-y-3 border-t border-secondaryContrast bg-primaryMain p-6 shadow transition-all duration-300 lg:static lg:flex lg:h-full lg:w-fit lg:space-x-8 lg:space-y-0 lg:border-0 lg:p-0 lg:shadow-none",
            isMobileNavOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-full opacity-0 lg:visible lg:translate-y-0 lg:opacity-100",
          )}
        >
          <Item
            name="Home"
            url={InternalLinks.HOME}
            onClick={() => setIsMobileNavOpen(false)}
          />
          <Item
            name="Women"
            url={InternalLinks.CATEGORY("women")}
            onClick={() => setIsMobileNavOpen(false)}
          />
          <Item
            name="Men"
            url={InternalLinks.CATEGORY("men")}
            onClick={() => setIsMobileNavOpen(false)}
          />
          <Item
            name="Beauty"
            url={InternalLinks.CATEGORY("beauty")}
            onClick={() => setIsMobileNavOpen(false)}
          />
          <Item
            name="Kids"
            url={InternalLinks.CATEGORY("kids")}
            onClick={() => setIsMobileNavOpen(false)}
          />
        </ul>
        <NavbarActions />
        <div className="flex lg:hidden">
          <div
            className="space-y-2 hover:cursor-pointer"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          >
            <span
              className={classNames(
                "block h-0.5 w-8 bg-secondaryMain transition-all duration-200 ease-in",
                {
                  "translate-y-2 -rotate-45 transform": isMobileNavOpen,
                },
              )}
            ></span>
            <span
              className={classNames(
                "block h-0.5 w-8 bg-secondaryMain transition-all duration-200 ease-in",
                {
                  "opacity-0": isMobileNavOpen,
                },
              )}
            ></span>
            <span
              className={classNames(
                "block h-0.5 w-8 bg-secondaryMain transition-all duration-200 ease-in",
                {
                  "-translate-y-3 rotate-45 transform": isMobileNavOpen,
                },
              )}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
