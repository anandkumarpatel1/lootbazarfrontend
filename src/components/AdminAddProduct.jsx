import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AdminAddProduct.css";

const AdminAddProduct = () => {
  const navigate = useNavigate;

  let auth = localStorage.getItem("user");
  const userId = JSON.parse(auth)._id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [productId, setProductId] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const addProduct = async () => {
    let result = await fetch("https://new-folder-eosin.vercel.app/admin/product/add", {
      method: "post",
      body: JSON.stringify({ name, price, brand, category, userId, productId, imgUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result._id) {
      alert("Product added successfull");
      setName("");
      setBrand("");
      setPrice("");
      setCategory("");
      setProductId("");
      setImgUrl("");
    } else {
      alert("Please Enter the details care fully");
    }
  };

  return (
    <section>
      <div className="add-product-bg">
        <div className="my-add-product">
          <div className="my-add-product-form">
            <p>Add Product</p>
            <input
              type="text"
              value={name}
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={35}
            />
            <input
              type="number"
              value={price}
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
              required
              maxLength={35}
            />
            <input
              type="text"
              value={brand}
              placeholder="Product Brand"
              onChange={(e) => setBrand(e.target.value)}
              required
              maxLength={35}
            />
            <input
              type="text"
              placeholder="Product Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              maxLength={35}
            />
            <input
              type="number"
              value={productId}
              placeholder="Product ID (unique)"
              onChange={(e) => setProductId(e.target.value)}
              required
              maxLength={35}
            />
            <input
              type="text"
              value={imgUrl}
              placeholder="Product Img"
              onChange={(e) => setImgUrl(e.target.value)}
              required
            />
            <button onClick={addProduct}>Add Product</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminAddProduct;
