import { createContext, useContext, useState, useEffect } from "react";
import { PRODUCTS_URL } from "../config";
import { getItems, setItems } from "../utils/localStorage";

const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState(getItems("fav") || []);

  const addToFav = (id) => {
    setFav((prev) => {
      
      const updated = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];

      setItems("fav", updated);
      return updated;
    });
  };

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => {
        console.log("Fetching...");
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => setProducts(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error, fav, addToFav }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
