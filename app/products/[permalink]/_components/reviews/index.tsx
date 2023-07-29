import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { DetailsReviews, Review } from "../../reviews/route";
import { ItemReview } from "./item";
import { Ratings } from "./ratings";

async function getReviews(permalink: string): Promise<DetailsReviews> {
  const data = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/products/${permalink}/reviews`,
    {
      cache: "no-store",
    },
  );
  return data.json();
}

export async function ProductReviews({ permalink }: { permalink: string }) {
  const { reviews, countReviews, ratingsAverage }: DetailsReviews =
    await getReviews(permalink);

  return (
    <div className="mt-8s">
      <h3 className="text-lg font-bold uppercase">Reviews</h3>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <Ratings rating={ratingsAverage} />
          <span className="ml-2 text-sm font-bold leading-none text-slate-500">
            {countReviews} Reviews
          </span>
        </div>
        <div className="flex items-center hover:cursor-pointer">
          <ChatBubbleBottomCenterIcon className="h-4 w-4 text-slate-500" />
          <span className="ml-2 text-sm font-bold leading-none text-slate-500">
            Write a review
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-6 border-b border-solid border-gray-200 pb-4">
        {reviews?.map((review: Review) => (
          <ItemReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}
