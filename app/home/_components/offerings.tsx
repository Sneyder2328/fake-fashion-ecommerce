import classNames from "classnames";
import {
  TruckIcon,
  ArrowPathIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function Offering({
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

export function HomeOfferings({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        className,
        "flex flex-col items-center justify-between space-y-4 sm:flex-row",
      )}
    >
      <Offering
        Icon={TruckIcon}
        title="Free Shipping"
        description="For all orders over $100"
      />
      <Offering
        Icon={ArrowPathIcon}
        title="30 days return"
        description="Simply return it within 30 days for an exchange"
      />
      <Offering
        Icon={GlobeAltIcon}
        title="Support 24/7"
        description="Contact us 24 hours a day, 7 days a week"
      />
    </div>
  );
}
