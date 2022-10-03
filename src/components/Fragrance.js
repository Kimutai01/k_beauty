import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Fragrance = () => {
  const [fragrance, setFragrance] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())

      .then((data) => {
        setFragrance(data);
      });
  }, []);
  return (
    <div>
      <h1>Fragrance</h1>
      {fragrance.map(
        (product) =>
          product.category === "Fragrance" && (
            <ProductList key={product.id} product={product} />
          )
      )}
    </div>
  );
};

export default Fragrance;
