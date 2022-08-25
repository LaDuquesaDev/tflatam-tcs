import './Header-Footer.css';
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate()
  return (
    <div className='header-group'>
      <img
        className='gradient header'
        alt='gradient header'
        src={require('../images/header.png')}
      />
      <div className='header-icons'>
        <img
          className='header-icon'
          alt='gradient header'
          src={require('../images/tcs-logo.png')}
        />
        <img
          className='header-logout'
          alt='gradient header'
          src={require('../images/logout.png')}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  )
}

export default Header;