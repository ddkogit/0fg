import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">FIXGO</div>

      <div className="nav-menu">
        <button className="nav-profile"></button>
      </div>
    </div>
  );
}

export default NavBar;
