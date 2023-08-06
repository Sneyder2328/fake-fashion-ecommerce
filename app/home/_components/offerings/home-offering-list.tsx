import classNames from "classnames";
import {
  TruckIcon,
  ArrowPathIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { HomeOfferingItem } from "./home-offering-item";

export function HomeOfferingList({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        className,
        "flex flex-col items-center justify-between space-y-4 sm:flex-row",
      )}
    >
      <HomeOfferingItem
        Icon={TruckIcon}
        title="Free Shipping"
        description="For all orders over $100"
      />
      <HomeOfferingItem
        Icon={ArrowPathIcon}
        title="30 days return"
        description="Simply return it within 30 days for an exchange"
      />
      <HomeOfferingItem
        Icon={GlobeAltIcon}
        title="Support 24/7"
        description="Contact us 24 hours a day, 7 days a week"
      />
    </div>
  );
}
