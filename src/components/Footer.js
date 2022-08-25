import './Header-Footer.css';

function Footer() {

  return (
    <div className="footer-group">
      <img
        className='gradient footer'
        alt='gradient footer'
        src={require('../images/footer.png')}
      />
      <div className='footer-icons'>
        <img
          className='footer-icon'
          alt='gradient footer'
          src={require('../images/home.png')}
        />
        <img
          className='footer-icon'
          alt='gradient header'
          src={require('../images/profile.png')}
        />
        <img
          className='footer-icon'
          alt='gradient header'
          src={require('../images/ranking.png')}
        />
      </div>
    </div>
  )
}

export default Footer;