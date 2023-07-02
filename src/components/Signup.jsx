import React, { useState, useEffect } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const signupButton = async() =>{
    console.log(name, email, password);
    let result = await fetch('https://new-folder-eosin.vercel.app/signup',{
        method : 'post',
        body : JSON.stringify({name, email , password}),
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    result = await result.json()
    if(result.name){
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/')
    }
    else{
        alert('user is already exist')
    }
  }

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
  },[])

  return (
    <section>
      <div className="signup-bg">
        <div className="my-signup">
          <div className="my-signup-form">
            <p>Create account </p>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={35}
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              maxLength={35}
              minLength={7}
            />
            <button onClick={signupButton}>Sign up</button>
            <button className="button2">Google</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
