import React, { useEffect, useState } from "react";
import { Link, Route,Routes,BrowserRouter, useNavigate } from "react-router-dom";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import "./MenuList.css";
function MenuList({ mouseStatus,handleLogout,accessToken }) {



  return (
    <div>
      <div className={mouseStatus ? "menu-container hidden" : "menu-container"}>
        <ul className="menu-items">
        <li>
          <Link to={"/profile"} >
        My Profile
          </Link>
      </li>
      <li>
        <Link to={"/adminlist"}>
        Users
        </Link>
      </li>
   
          <li onClick={handleLogout}>Logout </li>
        </ul>
      </div>
     

    </div>

    
  );
}

export default MenuList;
