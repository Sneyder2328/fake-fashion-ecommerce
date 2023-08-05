"use client";

import { ShareIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

function shareLink({ title, url }: { title: string; url: string }) {
  if (navigator.share) {
    return navigator
      .share({ title, url })
      .then(() => {})
      .catch(console.error);
  }
  // if share api is not available then copy the url into the clipboard
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(url)
      .then(() =>
        toast("Link copied into the clipboard!", { position: "top-right" }),
      )
      .catch(console.error);
  }
}

export function Share({
  permalink,
  name,
}: {
  permalink: string;
  name: string;
}) {
  return (
    <div
      className="flex items-center space-x-2 hover:cursor-pointer"
      onClick={() => shareLink({ url: permalink, title: name })}
    >
      <ShareIcon className="w-3 text-gray-700" />
      <span className="text-sm font-semibold text-gray-500">Share</span>
    </div>
  );
}
