import { ImageWrapper } from "@/app/_components/image-wrapper";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

function Card({ image, title, description }: CardProps) {
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

type CardGridProps = {
  cards: CardProps[];
};

function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="mb-32 mt-6 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-6 md:mb-48 md:grid-cols-3 md:gap-5 xl:mb-20">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}

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
      <CardGrid cards={cards} />
    </div>
  );
}
