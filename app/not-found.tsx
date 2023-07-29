import Link from "next/link";
import RootLayout from "./layout";
import { InternalLinks } from "./_lib/constants";

export default function NotFound() {
  return (
    <RootLayout>
      <div className="inner flex w-full grow flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold">404 - Page not found</h2>
        <h3 className="mt-4 text-xl">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </h3>
        <Link
          href={InternalLinks.HOME}
          className="mt-6 cursor-pointer text-xl underline"
        >
          <span>Go back to home</span>
        </Link>
      </div>
    </RootLayout>
  );
}
