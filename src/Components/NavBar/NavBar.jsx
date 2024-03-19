import React, { useState } from "react";
import "./NavBar.css";
import MenuList from "../MenuList/MenuList";

function NavBar({handleLogout}) {
  const [mouseStatus,setMouseStatus] = useState(true);
  return (
    <div>
      <div className="nav-container">
        <div className="nav-logo">FIXGO</div>

          <div className="nav-menu">
        
            <button 
            onClick={()=>setMouseStatus(!mouseStatus)}
            className="nav-profile"></button>
           
            </div>

      </div>
        <MenuList  mouseStatus={mouseStatus} handleLogout={handleLogout}/>
    </div>
  );
}

export default NavBar;
