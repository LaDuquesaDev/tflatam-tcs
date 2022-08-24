import React from 'react'
import { useNavigate } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();
    const handleDelivered = () => {
    navigate("/Register")
  }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleDelivered}>Registrarse</button>
    </div>
  )
}

export default Login;