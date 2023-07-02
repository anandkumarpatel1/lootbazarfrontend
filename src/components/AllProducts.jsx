import React, { useEffect, useState } from "react";
import "../styles/AllProducts.css";
import NoFound from "../assests/no-results-found.png";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    let result = await fetch("https://new-folder-eosin.vercel.app/products");
    result = await result.json();
    setProducts(result);
  };

  const searchHandler = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`https://new-folder-eosin.vercel.app/search/${key}`);
      result = await result.json();
      setProducts(result);
    } else {
      getAllProducts();
    }
  };
  return (
    <section>
      <div className="all-products-first">
        <div>
          <p>All Products</p>
        </div>
        <div>
          <input type="text" placeholder="Search" onChange={searchHandler} />
        </div>
      </div>
      <div className="home-product-cont">
        <div className="home-card-cont">
          {products.length > 0 ? (
            products.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.imgUrl} alt="" />
                <p>{item.name}</p>
                <p>₹ {item.price} </p>
              </div>
            ))
          ) : (
            <div>
              <img src={NoFound} alt="NO Products Found" className="no-found"/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
