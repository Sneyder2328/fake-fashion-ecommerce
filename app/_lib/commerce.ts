import CommerceSDK from "@chec/commerce.js";
import { cache } from "react";

if (!process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY) {
  throw new Error(
    "Missing NEXT_PUBLIC_CHEC_PUBLIC_API_KEY environment variable",
  );
}

export const commerce = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY!);

export async function wrapAsync<T>(
  promise: Promise<T>,
): Promise<[T | undefined, unknown]> {
  try {
    const data = await promise;
    return [data, undefined];
  } catch (err) {
    return [undefined, err];
  }
}

export const getCategories = cache(async (limit: number) => {
  return wrapAsync(
    commerce.categories.list({
      limit,
    }),
  );
});

export const getProduct = cache(async (permalink: string) => {
  return wrapAsync(
    commerce.products.retrieve(permalink, {
      type: "permalink",
    }),
  );
});

export const getVariants = cache(async (productId: string) => {
  return wrapAsync(commerce.products.getVariants(productId));
});

export const getProductsByCategory = cache(async (categorySlug: string) => {
  return wrapAsync(
    commerce.products.list({
      category_slug: categorySlug.toLowerCase(),
    }),
  );
});
