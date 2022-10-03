import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())

      .then((data) => {
        setPopular(data);
      });
  }, []);
  return (
    <div>
      <h1>Popular</h1>
      {popular.map(
        (product) =>
          product.popular && <ProductList key={product.id} product={product} />
      )}
    </div>
  );
};

export default Popular;
