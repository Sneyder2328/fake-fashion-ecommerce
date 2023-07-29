type Props = {
  className?: string;
};
export function FormOffer({ className }: Props) {
  return (
    <div className={className}>
      <div className="h-full w-full bg-gradient-to-l from-slate-100 via-neutral-400 to-neutral-300 py-10">
        <div className="mx-auto my-auto flex w-11/12 max-w-sm flex-col items-center rounded bg-white px-8 py-8 sm:px-16 sm:py-14">
          <span className="text-xs font-bold uppercase text-gray-400">
            Special offer
          </span>
          <span className="px-2 text-center text-2xl font-bold uppercase">
            Subscribe and <span className="text-[#f31d65]">get 10% off</span>
          </span>
          <form className="mt-4">
            <input
              className="w-full bg-gray-100 py-2 outline-none placeholder:text-center"
              type="email"
              placeholder="Enter your email"
            />
            <button className="mt-4 w-full bg-black px-4 py-[11px] text-sm font-light uppercase text-white hover:bg-gray-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
