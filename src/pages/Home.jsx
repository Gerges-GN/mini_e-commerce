import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-7 ">
      {data.map((item, i) => (
      <ProductCard key={i} prop={item} />
      ))}
    </div>
  );
}

export default Home;
