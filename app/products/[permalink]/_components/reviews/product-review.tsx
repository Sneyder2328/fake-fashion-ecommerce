import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { Review } from "../../reviews/route";
import { RatingsStars } from "../../../../_components/ratings-stars";

export function ProductReview({ review }: { review: Review }) {
  return (
    <div key={review.id}>
      <div className="flex justify-between">
        <p className="font-bold">{review.authorName}</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm leading-none text-slate-500">
            {dayjs().to(review.createdAt)}
          </span>
          <RatingsStars rating={review.rating} />
        </div>
      </div>
      <p className="mt-2 text-slate-500">{review.content}</p>
    </div>
  );
}
