export function CardItemsCounter({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="inline rounded bg-primaryContrast py-1">
      <button
        className="w-7 text-slate-500"
        onClick={() => onChange(value - 1)}
      >
        -
      </button>
      <span className="w-8 text-slate-500">{value}</span>
      <button
        className="w-7 text-slate-500"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
