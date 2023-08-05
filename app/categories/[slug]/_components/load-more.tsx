"use client";

import { LoadingSpinner } from "@/app/_components/loading-spinner";
import { commerce } from "@/app/_lib/commerce";
import { ProductGridItems, ProductGridItemsSkeleton } from "@/app/products/[permalink]/_components/grid/product-grid-items";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function LoadMoreProducts({ categorySlug }: { categorySlug: string }) {
  const [ref, inView] = useInView();

  const productsQuery = useInfiniteQuery({
    queryKey: ["products", categorySlug],
    queryFn: ({ pageParam = 2 }) => {
      const params = {
        category_slug: categorySlug,
        limit: 12,
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

  useEffect(() => {
    if (inView && productsQuery.hasNextPage && !productsQuery.isFetching) {
      productsQuery.fetchNextPage();
    }
  }, [inView, productsQuery]);

  return (
    <>
      {productsQuery.data?.pages.map((products, i) => (
        <ProductGridItems
          key={i}
          products={products?.data?.map(
            ({ id, name, price, image, permalink }) => ({
              id,
              name,
              price,
              image,
              permalink,
            }),
          )}
        />
      ))}
      {productsQuery.hasNextPage && (
        <div ref={ref}>
          <ProductGridItemsSkeleton count={4} />
        </div>
      )}
    </>
  );
}
