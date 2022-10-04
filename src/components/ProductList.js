import React from "react";
import "./ProductList.css";

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description.slice(0, 100)}...</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductList;
