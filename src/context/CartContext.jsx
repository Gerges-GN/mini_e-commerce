import { createContext, useContext, useEffect, useState } from "react";
import { getItems, setItems } from "../utils/localStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getItems("cart") || []);

  useEffect(()=>{
    setItems('cart', cart)
  }, [cart])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    let i;
    for (i = 0; i < cart.length; i++) {
      if (product.id === cart[i].id) {
        setCart((prev) => prev.filter((item) => item.id !== product.id));
        break;
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);