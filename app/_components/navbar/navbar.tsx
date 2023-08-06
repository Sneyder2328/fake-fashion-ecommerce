"use client";

import { InternalLinks } from "@/app/_lib/constants";
import Link from "next/link";
import { NavbarActions } from "./navbar-actions";
import { useState } from "react";
import classNames from "classnames";

function Item({ name, url }: { name: string; url: string }) {
  return (
    <li className="text-base font-semibold text-primaryMainText hover:text-primaryLightText lg:text-[0.92rem]">
      <Link href={url}>{name}</Link>
    </li>
  );
}

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

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
            "absolute left-0 top-14 z-10 w-full space-y-3 border-t border-secondaryContrast bg-primaryMain p-6 shadow lg:static lg:flex lg:w-fit lg:space-x-4 lg:space-y-0 lg:border-0 lg:p-0 lg:shadow-none",
            {
              hidden: !mobileMenuIsOpen,
            },
            {
              block: mobileMenuIsOpen,
            },
          )}
        >
          <Item name="About Us" url="/" />
          <Item name="Women" url={InternalLinks.CATEGORY("women")} />
          <Item name="Men" url={InternalLinks.CATEGORY("men")} />
          <Item name="Beauty" url={InternalLinks.CATEGORY("beauty")} />
          <Item name="Kids" url={InternalLinks.CATEGORY("kids")} />
          <Item name="Blog" url={"/"} />
          <Item name="Contact" url={"/"} />
        </ul>
        <NavbarActions />
        <div className="flex lg:hidden">
          <div
            className="space-y-2 hover:cursor-pointer"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            <span
              className={classNames(
                "block h-0.5 w-8 bg-secondaryMain transition-all duration-200 ease-in",
                {
                  "translate-y-2 -rotate-45 transform": mobileMenuIsOpen,
                },
              )}
            ></span>
            <span
              className={classNames(
                "block h-0.5 w-8 bg-secondaryMain transition-all duration-200 ease-in",
                {
                  "opacity-0": mobileMenuIsOpen,
                },
              )}
            ></span>
            <span
              className={classNames(
                "block h-0.5 w-8 bg-secondaryMain transition-all duration-200 ease-in",
                {
                  "-translate-y-3 rotate-45 transform": mobileMenuIsOpen,
                },
              )}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
