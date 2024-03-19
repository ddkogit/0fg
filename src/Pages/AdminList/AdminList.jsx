import React, { useEffect, useState } from "react";
import "./AdminList.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import AdminListRow from "../../Components/AdminListRow/AdminListRow";
import NavBar from "../../Components/NavBar/NavBar";

function AdminList({ handleUserLoad, handleLogout,accessToken }) {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    const fetchdata = async () => {
      try {
        setIsLoading(true);

        const data = await handleUserLoad();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("error occured", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();

    console.log(data);
  }, [handleUserLoad]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout} />

      <div className="adminlist-container">
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
          {data &&
            data.docs.map((item, i) => (
              <AdminListRow
                key={item.id}
                sn={i + 1}
                name={
                  item.name.first && item.name.last
                    ? `${item.name.first} ${item.name.last}`
                    : "N/A"
                }
                email={item.email}
                joindate={item.createdAt}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AdminList;
