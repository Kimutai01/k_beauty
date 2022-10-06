import React from "react";
import CartContext from "../cartContext";
import { useContext } from "react";

const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
