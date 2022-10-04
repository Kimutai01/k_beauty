import React, { useEffect, useState } from "react";
import Fragrance from "./Fragrance";
import Popular from "./Popular";
import SkinCare from "./SkinCare";
import ParticlesBackground from "./ParticlesBackground";
import ParticlesBg from "particles-bg";
import "../App.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="home">
      {/* {data.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))} */}
      <ParticlesBg num={100} type="cobweb" bg color="#0ab4e7" />
      <Popular />
      <SkinCare />
      <Fragrance />
    </div>
  );
};

export default Home;
