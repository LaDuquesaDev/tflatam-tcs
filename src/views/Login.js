import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import logo from '../images/logo.svg';
import email from '../images/email.svg';
import password from '../images/password.svg';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Profile")
  }

  return (
    <div className="container-login">
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
        <Link to='#'>Olvidaste tu contraseña?</Link>
        <button className="sign-in" type="submit" onClick={handleClick}>Iniciar Sesión</button>
        <p>No eres miembro?</p>
        <Link to='/Register'>Registrate ahora</Link>
      </form>
    </div>
  )
}

export default Login;