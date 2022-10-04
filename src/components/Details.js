import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [single, setSingle] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((r) => r.json())

      .then((data) => {
        setSingle(data);
      });
  }, []);
  return (
    <div>
      {/* {single.map((product) => (
        <li>product.title</li>
      ))} */}
      {single.title}
    </div>
  );
};

export default Details;
