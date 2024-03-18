import React, { useState } from "react";
import "./NavBar.css";
import MenuList from "../MenuList/MenuList";

function NavBar({ accessToken }) {
  const [mouseStatus,setMouseStatus] = useState(true);
  return (
    <div>
      <div className="nav-container">
        <div className="nav-logo">FIXGO</div>

          <div className="nav-menu">
        {accessToken && (
            <button 
            onClick={()=>setMouseStatus(!mouseStatus)}
            // onMouseLeave={()=>setMouseStatus(!mouseStatus)}
            className="nav-profile"></button>
            )}
            </div>

      </div>
        <MenuList  mouseStatus={mouseStatus}/>
    </div>
  );
}

export default NavBar;
