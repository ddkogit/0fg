import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Pages/Login/Login";

import { url } from "./Data";
import axios from "axios";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MenuList from "./Components/MenuList/MenuList";
import UserProfile from "./Pages/UserProfile/UserProfile";
import AdminList from "./Pages/AdminList/AdminList";
import AddUser from "./Pages/AddUser/AddUser";
import AddUser2 from "./Pages/AddUser/AddUser2";
function App() {
  const [accessToken, setAccessToken] = useState(null);

  // const navigate = useNavigate();

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

  const handleAddUser1 = (email, password, phone, name) => {
    let data = {
      email: email,
      password: password,
      phone: phone,
      name: name,
    };

    axios
      .post(`${url}/api/v1/admin/user/register`, data)
      .then((response) => {
        console.log("user Created");
        // navigate("/adminlist")

        // const accessToken = response.data.data.accessToken;
        // // setAccessToken(response.data.data.accessToken);
        // localStorage.setItem("accessToken", accessToken);
        // setAccessToken(accessToken);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        if (error.response) {
          console.error("Status code:", error.response.status);
          console.error("Response data:", error.response.data);
        }
      });
  };

  const handleDelete = (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${url}/api/v1/admin/user//delete/${id}`,
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVjNWFjNjI5NzAyZjcwNGNkZDI4MyIsImxvZ2luIjoxLCJpc0FkbWluIjp0cnVlLCJ1dWlkIjoiNzkwOTQ3MDAzNTQ4OTI1MyIsImlhdCI6MTcxMDgxODQ5MTQwMywiZXhwIjoxNzEwODE4NzUwNjAzfQ.MEFgzrqJB1tOUErhA5EHr0emjX7EGyREg5AMnaKaOL8'
      }
    };

    return axios
      .request(config)
      .then((response) => {
        console.log("user deleted", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleView = () => {
    console.log("view");
  };
  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login handleLogin={handleLogin} accessToken={accessToken} />
            }
          />
          <Route
            path="/profile"
            element={
              <UserProfile
                handleProfileLoad={handleProfileLoad}
                handleLogout={handleLogout}
                accessToken={accessToken}
              />
            }
          />
          <Route
            path="/adminlist"
            element={
              <AdminList
                handleUserLoad={handleUserLoad}
                handleLogout={handleLogout}
                accessToken={accessToken}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleView={handleView}
              />
            }
          />
          <Route
            path="/adduser"
            element={<AddUser handleAddUser1={handleAddUser1} />}
          />

          <Route path="adduser2" element={<AddUser2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
