import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../App.css";

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
      <div className="pop">
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            pagination: false,
            autoplay: true,
            speed: 5500,
            type: "loop",
            interval: 4000,
            rewindByDrag: true,
            drag: "free",
          }}
        >
          {skinCare.map(
            (product) =>
              product.category === "Skincare" && (
                <SplideSlide key={product.id}>
                  <ProductList key={product.id} product={product} />
                </SplideSlide>
              )
          )}
        </Splide>
      </div>
    </div>
  );
};

export default SkinCare;
