import React, { useState } from "react";
import "./MenuList.css";
function MenuList({mouseStatus}) {
  return (
    <div>
      <div  
      className = {mouseStatus?"menu-container hidden":"menu-container"}
      >
        <ul className="menu-items">
          <li>My Profile</li>
          <li>Users</li>
          <li>asdf</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuList;
