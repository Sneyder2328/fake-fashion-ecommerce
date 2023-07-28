export enum VariantGroups {
  COLOR = "Color",
  SIZE = "Size",
}

export const InternalLinks = {
  HOME: "/",
  CATEGORY: (slug: string) => `/categories/${slug}`,
  PRODUCT: (permalink: string) => `/products/${permalink}`,
}