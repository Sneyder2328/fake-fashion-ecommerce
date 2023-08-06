import { TruckIcon } from "@heroicons/react/24/outline";

export function HomeOfferingItem({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  className?: string;
  Icon: typeof TruckIcon;
}) {
  return (
    <div className="flex w-2/3 sm:w-1/3">
      <Icon className="w-8" />
      <div className="ml-2 flex flex-col">
        <span className="text-sm font-semibold uppercase">{title}</span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </div>
  );
}
