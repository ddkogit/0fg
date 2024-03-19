import React, { useEffect, useState } from "react";
import "./AdminList.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import AdminListRow from "../../Components/AdminListRow/AdminListRow";

function AdminList({handleUserLoad}) {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  

  const goBack = () => {
    navigate(-1);
  };

  

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);

        const data = await handleUserLoad();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("error occured",error);
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
          {
            data && data.docs.map((item,i)=>(
              <AdminListRow key={item.id} 
              sn={i+1}
              name={`${item.name.first} ${item.name.last}`}
              email={item.email}
              joindate={item.createdAt}
              
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default AdminList;
