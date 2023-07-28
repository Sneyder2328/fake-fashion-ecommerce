import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

function Card({ image, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="bg-white absolute top-3/4 w-10/12 p-4">
        <h2 className="uppercase text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-slate-500 font-semibold">{description}</p>
      </div>
    </div>
  );
}

type CardGridProps = {
  cards: CardProps[];
};

function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="mt-6 mb-32 md:mb-48 xl:mb-20 gap-16 grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-5">
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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Wedding season",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w",
    title: "Favorites on repeat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
  },
];

export function HomeBlog({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <h4 className="uppercase text-xl font-semibold">Latest from blog</h4>
        <Link href={"/"} className="text-gray-600 uppercase text-sm font-bold">
          See all
        </Link>
      </div>
      <CardGrid cards={cards} />
    </div>
  );
}
