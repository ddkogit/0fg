import React from "react";
import "./AdminListRow.css";
function AdminListRow({
  sn,
  name,
  email,
  role,
  joindate,
  action,
  bold,
  handleDelete,
  handleEdit,
  handleView,
  id
}) {
  const handleActions = (action,id) => {
   
    switch (action) {
      case "edit":
        handleEdit();
        break;
      case "view":
        handleView();
        break;
      case "delete":
        handleDelete(id);
        break;
      default:
        break;
    }
  };

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
        {action.map((actionText, index) => (
          <button
            key={index}
            onClick={(e) => handleActions(e.target.textContent,id)}
          >
            {actionText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AdminListRow;
