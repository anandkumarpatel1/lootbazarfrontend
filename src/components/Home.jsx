import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import landingImg from "../assests/landing2.jpg";

const Home = () => {
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    productDetails();
  }, []);

  const productDetails = async () => {
    let result = await fetch("https://new-folder-eosin.vercel.app/admin/products");

    result = await result.json();

    setProductCard(result);
  };

  console.log(productCard);
  return (
    <>
      <div className="anime-backgroud">
        <img src={landingImg} alt="" />
      </div>
      <div className="letter">
        <p>Upto 20% Discount on</p>
      </div>
      <div className="typed">Girl's Fashion</div>

      <div className="home-product-cont">
        <p className="home-list">Hilighted Products</p>
        <div className="home-card-cont">
          {productCard.slice(0, 10).map((item, index) => (
            <div className="card" key={index}>
              <img src={item.imgUrl} alt="" />
              <p>{item.name}</p>
              <p>₹ {item.price} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
