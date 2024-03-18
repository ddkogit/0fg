import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Pages/Login/Login";

import { url } from "./Data";
import Button from "./Components/Button/Button";
function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (email, password) => {
    console.log(email, password);
  };

  const handleLogout =()=>{
    
  }

  if (!token) {
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
