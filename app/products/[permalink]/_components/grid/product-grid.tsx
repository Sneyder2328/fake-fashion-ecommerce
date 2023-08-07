import { ProductCard, ProductDetails } from "../card/product-card";

type Props = {
  products: ProductDetails[] | undefined;
};
export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 py-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
