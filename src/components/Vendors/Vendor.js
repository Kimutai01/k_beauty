import React, { useState } from "react";

const Vendor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const uploadImage = (files) => {
    console.log(files[0]);
  };
  return (
    <div>
      <input type="title" onChange={(e) => setTitle(e.target.value)} />
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e.target.files);
        }}
      />
      <input
        type="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="category" onChange={(e) => setCategory(e.target.value)} />
      <input type="price" onChange={(e) => setPrice(e.target.value)} />
      <input type="submit" onClick={() => {}} />
    </div>
  );
};

export default Vendor;
