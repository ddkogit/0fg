import React from "react";
import "./Login.css";
import Button from "../../Components/Button/Button";
function Login() {
  return (
    <div className="login-container">
      <div>Welcome</div>

      <form className="login-form">
        <label>
          {" "}
          Email Address
        </label>
          <input type="email" placeholder="Email" />

        <label>
          {" "}
          Password
        </label>
          <input type="password" placeholder="Password" />

        <Button text={"Login"} />
      </form>
    </div>
  );
}

export default Login;
