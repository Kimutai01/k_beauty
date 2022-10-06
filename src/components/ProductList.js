import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";
import CartContext from "../cartContext";
import { useContext } from "react";

const ProductList = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <Link to={`/detail/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>{product.description.slice(0, 100)}...</p>
      <p>{product.price}</p>
      <button
        onClick={() =>
          addToCart(product.title, product.price, product.image, product.id)
        }
      >
        {" "}
        Add to cart
      </button>
    </div>
  );
};

export default ProductList;
