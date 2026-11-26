import ProductCard from "./ProductCard";
export default function ProductList({ products }) {
  if (products.length === 0)
    return <p className="message">По вашему запросу ничего не найдено.</p>;
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
