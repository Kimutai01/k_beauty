import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart = (title, price, image, id) => {
    setItems((prevState) => [...prevState, { title, price, image, id }]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
