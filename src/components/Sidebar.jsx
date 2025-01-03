import React from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-s.png'
import LogoSubtitle from '../assets/images/logo_sub.png'
import Sign from '../assets/images/signature.png'
import sign2 from '../assets/images/sign2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='nav-bar'>

        <Link className = 'logo' t='/'>

        <img src={LogoS} alt="logo" />
        <img className='sub-logo' src={Sign} alt="logosub" />
        <img className='sub-logo2' src={sign2} alt="kulkarni" />

        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">

            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
           
           
          </NavLink>

          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>

          
          <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
            <FontAwesomeIcon  icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
        </nav>

    </div>
  )
}

export default Sidebar
