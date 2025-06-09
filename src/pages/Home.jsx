import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-7 ">
      {products.map((item, i) => (
      <ProductCard key={i} p={item} />
      ))}
    </div>
  );
}

export default Home;
