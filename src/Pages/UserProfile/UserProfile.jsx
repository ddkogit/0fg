import React, { useEffect, useState } from "react";
import { url } from "../../Data";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function UserProfile({ handleProfileLoad, handleLogout, accessToken }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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

        const data = await handleProfileLoad();
        setData(data);
       
      } catch (error) {
        console.log("error occured");
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();

  
  }, [handleProfileLoad]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <NavBar handleLogout={handleLogout} />
      <div className="userProfile-contianer">
        <div className="userProfile-left">
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={goBack}
          >
            Go Back
          </button>

          <h3>General Information</h3>

          <p>Name</p>
          <h4>{data && data.privilege.name}</h4>

          <p>Role</p>
          <h4>{data && data.role}</h4>
        </div>

        <div className="userProfile-right">
          <p>Profile Image</p>
          <img src="" alt="Avatar Image" />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
