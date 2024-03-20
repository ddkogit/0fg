import React from "react";
import "./AdminListRow.css";
function AdminListRow({ sn, name, email, role, joindate, action, bold }) {

    const handleActions=(action)=>{
      

    }

  return (
    <div
      className={
        bold ? "adminlistrow-container bold" : "adminlistrow-container"
      }
    >
      <span>{sn}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>{role}</span>
      <span>{joindate}</span>
      <div className="actions">
        {
          action.map((actionText,index)=>(
            <button key={index} onClick={(e)=>handleActions(e.target.textContent)}>
              {actionText}
            </button>
          ))
        }

      </div>
    </div>
  );
}

export default AdminListRow;
