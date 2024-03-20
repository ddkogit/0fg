import React from 'react'
import "./AddUser.css"
import { useNavigate } from 'react-router-dom'


function AddUser2() {
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default AddUser2