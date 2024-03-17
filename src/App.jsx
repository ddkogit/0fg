import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Login from './Pages/Login/Login'

import {url} from "./Data";
function App() {
  

  return (
 <>
 <NavBar />
 <Login />
 </>
  )
}

export default App
