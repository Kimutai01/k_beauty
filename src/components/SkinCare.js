import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const SkinCare = () => {
  const [skinCare, setSkinCare] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())

      .then((data) => {
        setSkinCare(data);
      });
  }, []);
  return (
    <div>
      <h1>Skin Care</h1>
      {skinCare.map(
        (product) =>
          product.category === "Skincare" && (
            <ProductList key={product.id} product={product} />
          )
      )}
    </div>
  );
};

export default SkinCare;
