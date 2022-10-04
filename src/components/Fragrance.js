import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

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
          {fragrance.map(
            (product) =>
              product.category === "Fragrance" && (
                <SplideSlide key={product.id}>
                  <Link to={`/detail/${product.id}`}>
                    <ProductList key={product.id} product={product} />
                  </Link>
                </SplideSlide>
              )
          )}
        </Splide>
      </div>
    </div>
  );
};

export default Fragrance;
