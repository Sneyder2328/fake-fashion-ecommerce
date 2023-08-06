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
    <div className={classNames("w-full bg-primaryContrast")}>
      <div className="inner py-4">
        <div className="flex justify-between">
          <ul className="flex flex-col md:space-x-2 md:flex-row md:items-center">
            {items.map((item, index) => (
              <Fragment key={item.name}>
                <ItemLink
                  href={item.url}
                  text={item.name}
                  className={
                    index === items.length - 1
                      ? "font-bold text-primaryMainText"
                      : undefined
                  }
                />
                {index < items.length - 1 && <ItemsDivider />}
              </Fragment>
            ))}
          </ul>
          <Share permalink={permalink} name={title} />
        </div>
        <h2 className="mx-auto w-fit text-2xl font-bold text-primaryMainText">
          {title}
        </h2>
      </div>
    </div>
  );
}
