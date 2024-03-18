import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Pages/Login/Login";

import { url } from "./Data";
import Button from "./Components/Button/Button";
import axios from "axios";
function App() {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = (email, password) => {

    let data = {
      "emailOrPhone": email,
      "password": password,
    };
   


axios.post(`${url}/api/v1/admin/user/login`, data)
    .then((response) => {
        console.log('Login successful:', response.data.data.accessToken);
setAccessToken(response.data.data.accessToken);
    })
    .catch((error) => {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Status code:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    });



  };

  const handleLogout = () => {
    axios.get(`${url}/api/v1/admin/user/logout`).then((res) => {
      console.log(res.data);
    });

    setAccessToken(null);

  };

  if (!accessToken) {
    return (
      <>
        <Login handleLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;
