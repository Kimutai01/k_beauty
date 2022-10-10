import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdShoppingBasket } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "../cartContext";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  const [single, setSingle] = useState({});

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((r) => r.json())

      .then((data) => {
        setSingle(data);
      });
  }, []);
  return (
    <div className="product-card">
      {/* {single.map((product) => (
        <li>product.title</li>
      ))} */}
      <div className="products">
        <div className="img-div">
          <img className="image" src={single.image} alt={single.title} />
        </div>
        <div>
          <h1>{single.title}</h1>
          <p>{single.description}</p>
          <p>{single.price}</p>

          <div className="links">
            <BsFillArrowLeftCircleFill
              className="back"
              onClick={() => navigate(-1)}
            />
            {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
            <FaShoppingCart
              className="detail__cart"
              onClick={() =>
                addToCart(single.title, single.price, single.image, single.id)
              }
            />
            <MdShoppingBasket
              className="detail__basket"
              onClick={() => navigate("/cart")}
            />
            {/* <button>Go to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
