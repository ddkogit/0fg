import React from "react";
import "./AdminList.css";
import { useNavigate } from "react-router-dom";

function AdminList() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>
        <button
        
        style={{
          cursor:"pointer"
        }}onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
}

export default AdminList;
