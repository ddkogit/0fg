import React from "react";
import "./AdminListRow.css";
function AdminListRow({sn,name,email,role,joindate,action,bold}) {
  return <div className={bold?"adminlistrow-container bold":"adminlistrow-container"}>

    <span>
      {sn}      
    </span>
    <span>
      {name}      
    </span>
    <span>
      {email}      
    </span>
    <span>
      {role}      
    </span>
    <span>
      {joindate}      
    </span>
    <span>
      {action}      
    </span>

  </div>;
}

export default AdminListRow;
