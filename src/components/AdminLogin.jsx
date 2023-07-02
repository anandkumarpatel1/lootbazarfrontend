import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async () => {
    let result = await fetch("https://new-folder-eosin.vercel.app/admin/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result.role === "admin") {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/')
    }else{
      alert('Your are not allow to access Admin pannel')
    }
  };

  return (
    <section className="bg-gradient-to-r from-red-500 via-pink-600 to-orange-400">
      <div className="signup-bg">
        <div className="my-login">
          <div className="my-login-form">
            <p>Admin Login</p>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              maxLength={35}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              maxLength={35}
              minLength={7}
            />
            <button onClick={loginSubmit}>Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
