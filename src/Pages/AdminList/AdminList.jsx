import React from "react";
import "./AdminList.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import AdminListRow from "../../Components/AdminListRow/AdminListRow";

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
            cursor: "pointer",
          }}
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
      <div>
        <div className="adminlist-top">
          <span>Users</span>
          <Button text={"Add User"} />
        </div>
        <div className="adminlist-bottom">
          <AdminListRow
            sn="SN."
            name="Name"
            email="Email"
            joindate="Join date"
            action="Action"
            bold={true}
          />
          <AdminListRow
            sn="SN."
            name="Name"
            email="Email"
            joindate="Join date"
            action="Action"
            
          />
        </div>
      </div>
    </div>
  );
}

export default AdminList;
