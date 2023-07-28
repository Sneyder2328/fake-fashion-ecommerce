import classNames from "classnames";
import { Share } from "./share";
import { Fragment } from "react";
import { ItemLink } from "./item-link";
import { ItemsDivider } from "./items-divider";

type Props = {
  title: string;
  permalink: string;
  items: {
    name: string;
    url: string;
  }[];
};
export function SectionHeader({ title, items, permalink }: Props) {
  return (
    <div className={classNames("w-full bg-[#f8f8f8]")}>
      <div className="inner py-4">
        <div className="flex justify-between">
          <ul className="flex items-center space-x-2">
            {items.map((item, index) => (
              <Fragment key={item.name}>
                <ItemLink
                  href={item.url}
                  text={item.name}
                  className={
                    index === items.length - 1 ? "text-black" : undefined
                  }
                />
                {index < items.length - 1 && <ItemsDivider />}
              </Fragment>
            ))}
          </ul>
          <Share permalink={permalink} name={title} />
        </div>
        <h2 className="mx-auto w-fit font-bold text-black text-2xl">{title}</h2>
      </div>
    </div>
  );
}
