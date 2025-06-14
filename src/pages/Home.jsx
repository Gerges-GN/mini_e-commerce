import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

function Home() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <div className="flex items-center justify-center h-dvh text-5xl ">
        <p>Loading products...</p>
      </div>
    );
  if (error) return <p className="text-red-500 text-3xl p-5">Error: {error}</p>;

  return (
    <div className="flex flex-wrap items-center justify-center p">
      <div className="flex flex-wrap items-center justify-center gap-5 py-7 max-w-screen-xl">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
