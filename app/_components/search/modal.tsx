import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { Modal } from "../base-modal";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { commerce } from "@/app/_lib/commerce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Scrollbar } from "react-scrollbars-custom";
import { SearchItem } from "./search-item";
import { SearchItemSkeleton } from "./search-item-skeleton";
import { useInView } from "react-intersection-observer";
import React from "react";
import { LoadingSpinner } from "../loading-spinner";
import { trackYStyle } from "@/app/_lib/styles";

const defaultAllCategories = {
  value: "all",
  label: "All categories",
};

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export function SearchModal({ isOpen, setIsOpen }: Props) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(defaultAllCategories);

  const [ref, inView] = useInView();

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: () => commerce.categories.list(),
  });

  const productsQuery = useInfiniteQuery({
    queryKey: ["search-products", selectedCategory.value, query],
    queryFn: ({ pageParam = 1 }) => {
      const params = {
        category_slug:
          selectedCategory.value === "all" ? undefined : selectedCategory.value,
        query: !!query ? query : undefined,
        limit: 8,
        page: pageParam,
      };
      return commerce.products.list(params);
    },
    getNextPageParam: (lastPage) => {
      const totalPages = lastPage.meta.pagination.total_pages;
      const currentPage = lastPage.meta.pagination.current_page;
      return currentPage < totalPages ? currentPage + 1 : undefined;
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

  useEffect(() => {
    if (inView && productsQuery.hasNextPage && !productsQuery.isFetching) {
      productsQuery.fetchNextPage();
    }
  }, [inView, productsQuery.hasNextPage, productsQuery.isFetching]);

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
          trackYProps={{ style: trackYStyle }}
        >
          <div className="space-y-4">
            {productsQuery.data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.data?.map((product) => (
                  <SearchItem
                    key={product.id}
                    product={product}
                    onHide={() => setIsOpen(false)}
                  />
                ))}
              </React.Fragment>
            ))}
            {productsQuery.hasNextPage && (
              <div ref={ref} className="space-y-4">
                <SearchItemSkeleton count={3} />
              </div>
            )}
          </div>
        </Scrollbar>
      </div>
    </Modal>
  );
}
