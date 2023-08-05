import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={twMerge(
        "bg-[#121212] px-5 py-[10px] text-xs font-light uppercase text-white hover:bg-gray-600 disabled:bg-slate-500",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
