import React, { useEffect, useState } from "react";
import Fragrance from "./Fragrance";
import Popular from "./Popular";
import SkinCare from "./SkinCare";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {/* {data.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))} */}
      <Popular />
      <SkinCare />
      <Fragrance />
    </div>
  );
};

export default Home;
