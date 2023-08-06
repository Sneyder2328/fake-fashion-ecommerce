import Link from "next/link";
import React from "react";
import { BlogGrid } from "./blog-grid";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "The easiest way to break",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Wedding season",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Favorites on repeat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
  },
];

export function HomeBlog({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-extrabold uppercase text-primaryMainText">
          Latest from blog
        </h4>
        <Link
          href={"/"}
          className="text-sm font-bold uppercase text-primaryLightText"
        >
          See all
        </Link>
      </div>
      <BlogGrid cards={cards} />
    </div>
  );
}
