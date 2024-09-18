import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faYoutube,faWhatsapp,faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='my-2'>
    <div className='footer-section '>
        <div className="footer-sec1">
          <h1>RAKESH</h1>
          <div ><h5>Where my skills meets real world needs.</h5></div>
        </div>
        <div className="footer-sec2">
          <h3>IMPORTANT LINKS</h3>
          <p><Link to="/">HOME</Link></p>
          <p><Link to="/about">ABOUT</Link></p>
          <p><Link to="/contact">CONTACT</Link></p>
          <p> <Link to="/project">PROJECTS</Link></p>
        </div>
        {/* <div className="footer-sec3">3</div> */}
        <div className="footer-sec4 my-4">
          <h3 className='my-4'>Connect With Me</h3>
          <p>
          <span className='social-items'> Instagram<FontAwesomeIcon icon={faInstagram} size="xs"  className='my-1'/></span>
          </p>
          <p>
          <span className='social-items'>Youtube<FontAwesomeIcon icon={faYoutube} size="xs"  className='my-1'/></span>
          </p>
          <p>
          <span className='social-items'> Whatsapp<FontAwesomeIcon icon={faWhatsapp} size="xs"  className='my-1'/></span>
          </p>
          <p>
          <span className='social-items'> Github<FontAwesomeIcon icon={faGithub} size="xs"  className='my-1'/></span>
          </p>
          <p>
          <span className='social-items'> Telegram<FontAwesomeIcon icon={faTelegram} size="xs"  className='my-1'/></span>
          </p>
        </div>
    </div>
    </footer>
  )
}
