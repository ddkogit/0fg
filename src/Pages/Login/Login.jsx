import React, { useEffect, useState } from "react";
import "./Login.css";
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";


function Login({ handleLogin, accessToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  useEffect(()=>{
    if(accessToken){
      navigate("/profile")
    }
  },[accessToken])

 

  return (
    <>
      <div className="login-container">
        <div className="login-welcome"> Welcome</div>

        <form onSubmit={handleSubmit} className="login-form">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <Button text={"Login"} />
        </form>
      </div>
    </>
  );
}

export default Login;
