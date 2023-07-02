import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Lootlogo from "../assests/loot-logo.png";
import { FiBell } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");

  const auth = localStorage.getItem("user");

  let adminAuth = localStorage.getItem("user");
  if (auth) {
    adminAuth = JSON.parse(adminAuth).role;
  }

  const logoutButton = () => {
    localStorage.clear("user");
    alert("log out successfull");
    navigate("/login");
  };

  const searchHandler = async (e) => {};

  const menuToggle = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <>
      <nav className="bg-gradient-to-r from-red-500 via-pink-600 to-orange-400 ">
        <div className="my-nav-main">
          <div className="col-1">
            <i
              className={`bi bi-${menu === false ? "list" : "x"}`}
              onClick={menuToggle}
            ></i>
            <Link to="/">
              {" "}
              <h1>LooT - BaZaR</h1>
            </Link>
          </div>
          <div className="my-nav-col-2">
            <Link to="/">
              <img src={Lootlogo} alt="" />
            </Link>
          </div>
          <div className="my-nav-icon">
            <FiBell className="my-nav-user-icon" />
            <AiOutlineShoppingCart className="my-nav-user-icon" />
            <CgProfile className="my-nav-user-icon" />
          </div>
        </div>
      </nav>
      <div className={`my-nav-list${menu === false ? "-none" : ""}`}>
        {auth ? (
          <ul>
            <li className="my-nav-option">
              <Link to="/products">All Products</Link>
            </li>
            <li className="my-nav-option">
              <Link to="/">Home</Link>
            </li>
            <li className="my-nav-option">
              <Link to={`/user/${JSON.parse(auth)._id}`}>Profile</Link>
            </li>
            <li className="my-nav-option">Setting</li>
            <li className="my-nav-option" onClick={logoutButton}>
              Log Out
            </li>
            <li className="my-nav-option">Contact</li>
            <li className="my-nav-option">Developer</li>
            <li className="my-nav-option">About Us</li>
          </ul>
        ) : (
          <ul>
            <li className="my-nav-option">
              <Link to="/login">Login</Link>
            </li>
            <li className="my-nav-option">
              <Link to="/admin/login">Admin Login</Link>
            </li>
            <li className="my-nav-option">Contact</li>
            <li className="my-nav-option">Developer</li>
            <li className="my-nav-option">About Us</li>
          </ul>
        )}

        {adminAuth === "admin" ? (
          <>
            <hr />
            <p>Admin access</p>
            <ul>
              <li className="my-nav-option">
                <Link to="/admin/product/add">Add Product</Link>
              </li>
              <li className="my-nav-option">
                <Link to="/admin/products">All Products (PC)</Link>
              </li>
              <li className="my-nav-option">Delete Product</li>
              <li className="my-nav-option">Edit Product</li>
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;
