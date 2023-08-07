import { Button } from "@/app/_components/button";

type Props = {
  className?: string;
};
export function HomeFormOffer({ className }: Props) {
  return (
    <div className={className}>
      <div className="h-full w-full bg-gradient-to-l from-slate-100 via-neutral-400 to-neutral-300 py-10">
        <div className="mx-auto my-auto flex aspect-[4/3] w-11/12 max-w-sm flex-col items-center justify-between rounded bg-primaryMain px-8 py-8 lg:max-w-md lg:px-24 lg:py-24">
          <span className="text-xs font-bold uppercase text-primaryLightText">
            Special offer
          </span>
          <span className="px-2 text-center text-2xl font-bold uppercase">
            Subscribe and <span className="text-[#f31d65]">get 10% off</span>
          </span>
          <form className="mt-4">
            <input
              className="w-full bg-primaryContrast px-3 py-2 outline-none placeholder:text-center"
              type="email"
              placeholder="Enter your email"
            />
            <Button className="mt-4 w-full px-4 py-[11px] text-base">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
