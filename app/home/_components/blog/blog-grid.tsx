import { BlogCard, BlogCardProps } from "./blog-card";

type BlogGridProps = {
  cards: BlogCardProps[];
};

export function BlogGrid({ cards }: BlogGridProps) {
  return (
    <div className="mb-32 mt-6 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-6 md:mb-48 md:grid-cols-3 md:gap-5 xl:mb-20">
      {cards.map((card) => (
        <BlogCard key={card.title} {...card} />
      ))}
    </div>
  );
}
