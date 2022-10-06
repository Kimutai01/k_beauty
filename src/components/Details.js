import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  const [single, setSingle] = useState({});

  const { id } = useParams();

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
      <h1>{single.title}</h1>
      <p>{single.price}</p>
      <img src={single.image} alt={single.title} />

      <button>Add to Cart</button>

      <p>{single.description}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>

      <button>Go to Cart</button>
    </div>
  );
};

export default Details;
