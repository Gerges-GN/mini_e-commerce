import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS_URL } from "../config";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => setProducts(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-dvh text-5xl ">
        <p>Loading products...</p>
      </div>
    );
  if (error) return <p className="text-red-500 text-3xl p-5">Error: {error}</p>;

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-7 x">
      {products.map((item) => (
        <ProductCard key={item.id} items={item} />
      ))}
    </div>
  );
}

export default Home;
