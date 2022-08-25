import './Header-Footer.css';
import { useNavigate } from "react-router-dom";
import up from '../images/up.svg'; 

function Header() {
  const navigate = useNavigate()
  return (
    <div className='header-group'>
      {/* <img
        className='gradient header'
        alt='gradient header'
        src={require('../images/header.png')}
      /> */}
      <img className="header-up" src={up} alt='Logo'></img>
      <div className='header-icons'>
        <img
          className='header-icon'
          alt='TCS white logo'
          src={require('../images/tcs-logo.png')}
        />
        <img
          className='header-logout'
          alt='logout logo'
          src={require('../images/logout.png')}
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  )
}

export default Header;