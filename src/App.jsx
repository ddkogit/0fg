import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Pages/Login/Login";

import { url } from "./Data";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuList from "./Components/MenuList/MenuList";
import UserProfile from "./Pages/UserProfile/UserProfile";
import AdminList from "./Pages/AdminList/AdminList";
function App() {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = (email, password) => {
    let data = {
      emailOrPhone: email,
      password: password,
    };

    axios
      .post(`${url}/api/v1/admin/user/login`, data)
      .then((response) => {
        const accessToken = response.data.data.accessToken;
        // setAccessToken(response.data.data.accessToken);
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        if (error.response) {
          console.error("Status code:", error.response.status);
          console.error("Response data:", error.response.data);
        }
      });
  };

  const handleLogout = () => {

    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  const handleProfileLoad = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${url}/api/v1/admin/user/current`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    return axios
      .request(config)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUserLoad = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${url}/api/v1/admin/user`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    return axios
      .request(config)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} accessToken={accessToken} />} />
            <Route
            path="/profile"
            element={<UserProfile handleProfileLoad={handleProfileLoad} handleLogout={handleLogout} accessToken={accessToken}/>}
            
          />
          <Route
            path="/adminlist"
            element={<AdminList handleUserLoad={handleUserLoad} handleLogout={handleLogout} accessToken={accessToken} />}
          />
          </Routes>
        </BrowserRouter>
      </>
    );
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar accessToken={accessToken} />
                <button onClick={handleLogout}>Logout</button>
              </>
            }
          />
          

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
