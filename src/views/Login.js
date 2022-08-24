import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import logo from '../images/logo.svg';
import email from '../images/email.svg';
import password from '../images/password.svg';  
import up from '../images/up.svg';
import down from '../images/down.svg';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Routermap")
  }

  return (
    <div className="container-login">
      <img className="" id='view-logo' src={up} alt='Logo'></img>
      <img className="logo" id='view-logo' src={logo} alt='Logo'></img>
      <form className="form-login">
        <label>
          <img className="email" id='view-logo' src={email} alt='correo'></img>
          <input type="text" name="name" className="inputs" placeholder="Correo"/>
        </label>
        <label>
          <img className="password" id='view-logo' src={password} alt='contraseña'></img>
          <input type="password" name="name" className="inputs" placeholder="Contraseña"/>
        </label>
        <Link className="forgot-password" to='#'>Olvidaste tu contraseña?</Link>
        <button className="sign-in" type="submit" onClick={handleClick}>Iniciar Sesión</button>
      </form>
      <img className="" id='view-logo' src={down} alt='Logo'></img>
    </div>
  )
}

export default Login;