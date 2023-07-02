import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const loginSubmit = async () => {
    let result = await fetch("https://new-folder-eosin.vercel.app/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
    else{
      alert('user name password wrong')
    }
  };
  return (
    <section>
      <div className="login-bg">
        <div className="my-login">
          <div className="my-login-form">
            <p>Login account </p>
            <input
              type="email"
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
            <p className="button2">
              Create account <span><Link className="font-bold text-2xl text-blue-700" to="/signup">
                sign up
              </Link></span>
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
