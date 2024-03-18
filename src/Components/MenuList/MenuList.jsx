import React, { useState } from "react";
import { Link, Route,Routes,BrowserRouter } from "react-router-dom";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import "./MenuList.css";
function MenuList({ mouseStatus }) {
  return (
    <div>
      <div className={mouseStatus ? "menu-container hidden" : "menu-container"}>
        <ul className="menu-items">
        <li>
          <Link to={"/profile"}>
        My Profile
          </Link>
      </li>
      <li>
        Users
      </li>
   
          <li>Logout </li>
        </ul>
      </div>
     

    </div>

    
  );
}

export default MenuList;
