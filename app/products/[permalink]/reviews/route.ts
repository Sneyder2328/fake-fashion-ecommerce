import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export interface DetailsReviews {
  reviews: Review[];
  ratingsAverage: number;
  countReviews: number;
}
export interface Review {
  id: string;
  authorName: string;
  createdAt: Date;
  rating: number;
  content: string;
}

function generateFakeReview(): Review {
  return {
    id: faker.string.uuid(),
    createdAt: faker.date.past(),
    authorName: faker.person.fullName(),
    rating: faker.number.int({ min: 1, max: 5 }),
    content: faker.lorem.paragraph(),
  };
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(
  _: Request,
  { params: { permalink } }: { params: { permalink: string } },
) {
  console.log("generating reviews for", permalink);

  const reviews: Review[] = [];
  const countReviews = faker.number.int({ min: 2, max: 10 });
  for (let i = 0; i < countReviews; i++) {
    reviews.push(generateFakeReview());
  }
  const ratingsAverage =
    reviews.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0.0) / countReviews;

  await wait(2000); // Wait for 2 seconds

  return NextResponse.json({
    reviews: reviews.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    ),
    ratingsAverage,
    countReviews,
  });
}
