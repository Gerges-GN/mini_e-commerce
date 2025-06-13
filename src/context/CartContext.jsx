import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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