import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../App.css";

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
          {popular.map(
            (product) =>
              product.popular && (
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

export default Popular;
