import React from "react";
import "./NavBar.css";

function NavBar({ accessToken }) {
  return (
    <div className="nav-container">
      <div className="nav-logo">FIXGO</div>

      {accessToken && (
        <div className="nav-menu">
          <button className="nav-profile"></button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
