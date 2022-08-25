import './Header-Footer.css';


function Header() {
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
        />
      </div>
    </div>
  )
}

export default Header;