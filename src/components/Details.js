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
      <div className="products">
        <div className="img-div">
          <img className="image" src={single.image} alt={single.title} />
        </div>
        <div>
          <h1>{single.title}</h1>
          <p>{single.description}</p>
          <p>{single.price}</p>

          <div className="links">
            <button>Add to Cart</button>

            <button onClick={() => navigate(-1)}>Go Back</button>

            <button>Go to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
