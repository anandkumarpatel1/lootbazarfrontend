import React, { useState, useEffect, useImperativeHandle } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/AdminAddProduct.css";

const AdminUpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [productId, setProductId] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const updateProduct = async () => {
    let result = await fetch(`https://new-folder-eosin.vercel.app/admin/product/update/${params.id}`,{
        method : 'put',
        body : JSON.stringify({name, price, brand, category, productId, imgUrl}),
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    result = await result.json()
    if(result){
        alert('Product updated successfully')
        navigate('/admin/products')
    }else{
        alert('something wrong')
    }
  };

  useEffect(() => {
    findProduct();
  }, []);

  console.log(params);

  const findProduct = async () => {
    console.log(params.id);
    let result = await fetch(`https://new-folder-eosin.vercel.app/admin/product/${params.id}`);

    result = await result.json()

   setName(result.name)
   setBrand(result.brand)
   setCategory(result.category)
   setImgUrl(result.imgUrl)
   setPrice(result.price)
   setProductId(result.productId)

  };

  return (
    <section>
      <div className="add-product-bg">
        <div className="my-add-product">
          <div className="my-add-product-form">
            <p>Update Product</p>
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
            <button onClick={updateProduct}>Update Product</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUpdateProduct;
