import React, { useEffect, useState } from "react";
import { url } from "../../Data";
import "./UserProfile.css"
import { useNavigate } from "react-router-dom";

function UserProfile({ handleProfileLoad }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const goBack =()=>{
    navigate(-1);
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);

        const data = await handleProfileLoad();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("error occured");
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();

    console.log(data);
  }, [handleProfileLoad]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="userProfile-contianer">
      <div className="userProfile-left">

      <button 
      style={{
        cursor:"pointer"
      }} onClick={goBack}>Go Back</button>


        <h3>General Information</h3>

        <p>Name</p>
        <h4>{data && data.privilege.name}</h4>

        <p>Role</p>
        <h4>{data && data.role}</h4>
      </div>

      <div className="userProfile-right">

    <p>
      Profile Image
    </p>
    <img src="" alt="Avatar Image" />

      </div>
    </div>
  );
}

export default UserProfile;
