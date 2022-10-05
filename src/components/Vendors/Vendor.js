import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Vendor.css";
import { BiCamera } from "react-icons/bi";

const Vendor = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const uploadImage = (files) => {
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "olc5gdaa");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dapnnry4b/image/upload",
      data
    ).then((res) => {
      console.log(res);
      setImage(res.data.url);
    });
  };
  const addProduct = () => {
    Axios.post("http://localhost:3001/products", {
      title: title,
      image: image,
      description: description,
      category: category,
      price: price,
      popular: false,
    }).then((res) => {
      setData([...data, res.data]);
    });
    setTitle("");
    setImage("");
    setDescription("");
    setCategory("");
    setPrice(0);
  };
  return (
    <div className="form">
      <h1>Add a product</h1>

      <input
        type="title"
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e.target.files[0]);
        }}
      />
      <input
        type="description"
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="submit" onClick={addProduct} />
    </div>
  );
};

export default Vendor;
