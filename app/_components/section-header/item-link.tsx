import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function ItemLink({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <li>
      <Link href={href}>
        <span
          className={twMerge(
            "text-sm font-semibold text-gray-500 hover:underline",
            className,
          )}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
