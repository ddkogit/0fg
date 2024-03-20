import React, { useState } from "react";
import "./AddUser.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

function AddUser({ handleAddUser1 }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAddFirst = (e) => {
    e.preventDefault();
    handleAddUser1(email, password, phone, name);
    navigate("/adduser2");
  };

  return (
    <div>
      <div className=" adduser-container">
        <div className="login-welcome"> Welcome</div>

        <form onSubmit={handleAddFirst} className="login-form">
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
          <label>Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Phone Number"
          />
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />

          <button> Next</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
