import React from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-s.png'
import LogoSubtitle from '../assets/images/logo_sub.png'
import Sign from '../assets/images/signature.png'
import sign2 from '../assets/images/sign2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faHome, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
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

          <NavLink exact="true" className="project-link" activeclassname="active" to="/contact">
            <FontAwesomeIcon  icon={faTasks} color='#4d4d4e' />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a target='_blank'
            rel='noreferrer' 
            href="https://www.linkedin.com/in/shardulkulk297/">
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </a>
          </li>

          <li>
            <a target='_blank'
            rel='noreferrer' 
            href="https://github.com/shardulkulk297">
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </a>
          </li>

          <li>
            <a target='_blank'
            rel='noreferrer' 
            href="https://www.instagram.com/shardulkulk297/">
              <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
            </a>
          </li>
        </ul>

    </div>
  )
}

export default Sidebar
