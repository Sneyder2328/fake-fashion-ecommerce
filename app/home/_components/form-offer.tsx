type Props = {
  className?: string;
};
export function FormOffer({ className }: Props) {
  return (
    <div className={className}>
      <div className="w-full h-full py-10 bg-gradient-to-l from-slate-100 via-neutral-400 to-neutral-300">
        <div className="w-11/12 max-w-sm bg-white rounded mx-auto my-auto flex flex-col items-center py-8 sm:py-14 px-8 sm:px-16">
          <span className="uppercase text-xs text-gray-400 font-bold">
            Special offer
          </span>
          <span className="uppercase text-2xl font-bold text-center px-2">
            Subscribe and <span className="text-[#f31d65]">get 10% off</span>
          </span>
          <form className="mt-4">
            <input
              className="w-full outline-none bg-gray-100 placeholder:text-center py-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className="w-full bg-black text-white font-light px-4 py-[11px] uppercase mt-4 text-sm hover:bg-gray-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
