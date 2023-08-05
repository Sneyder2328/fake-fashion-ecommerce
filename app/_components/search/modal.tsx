import { useMemo, useState } from "react";
import Select from "react-select";
import { Modal } from "../base-modal";
import { useQuery } from "@tanstack/react-query";
import { commerce } from "@/app/_lib/commerce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Scrollbar } from "react-scrollbars-custom";
import { SearchItem } from "./search-item";
import { SearchItemSkeleton } from "./search-item-skeleton";

const defaultAllCategories = {
  value: "all",
  label: "All categories",
};

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export function SearchModal({ isOpen, setIsOpen }: Props) {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(defaultAllCategories);

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: () => commerce.categories.list(),
  });

  const productsQuery = useQuery({
    queryKey: ["products", selectedCategory.value, query, page],
    queryFn: () => {
      const params = {
        category_slug:
          selectedCategory.value === "all" ? undefined : selectedCategory.value,
        query: !!query ? query : undefined,
        limit: 5,
        page,
      };
      return commerce.products.list(params);
    },
  });

  const options = useMemo(() => {
    const items = [defaultAllCategories];
    const categories = categoriesQuery.data?.data.map((category) => ({
      value: category.slug,
      label: category.name,
    }));
    categories && items.push(...categories);
    return items;
  }, [categoriesQuery.data?.data]);

  return (
    <Modal title="Search" onHide={() => setIsOpen(false)} isOpen={isOpen}>
      <div className="flex h-full flex-col">
        <Select
          options={options}
          onChange={(newValue) => newValue && setSelectedCategory(newValue)}
          value={selectedCategory}
          placeholder=""
        />
        <div className="mt-6 flex items-center justify-between bg-[#f8f8f8]">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="grow bg-[#f8f8f8] px-3 py-2 outline-none  placeholder:text-slate-400"
          />
          <MagnifyingGlassIcon className="mr-4 h-6 w-6 text-slate-400" />
        </div>
        <div className="border-b-2 border-gray-300 pt-6"></div>
        <span className="mt-6 font-bold uppercase">Need some inspiration?</span>

        <Scrollbar
          style={{
            width: "100%",
            height: "100%",
            flexGrow: 1,
            marginTop: "1.5rem",
          }}
          noScrollX={true}
          trackYProps={{
            style: {
              width: 7,
              top: 0,
            },
          }}
        >
          <div className="space-y-4">
            {productsQuery.isFetching && <SearchItemSkeleton count={3} />}
            {!productsQuery.isFetching &&
              productsQuery.data?.data?.map((product) => (
                <SearchItem
                  key={product.id}
                  product={product}
                  onHide={() => setIsOpen(false)}
                />
              ))}
          </div>
        </Scrollbar>
      </div>
    </Modal>
  );
}
