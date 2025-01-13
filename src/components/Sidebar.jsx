import React from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-s.png'
import LogoSubtitle from '../assets/images/logo_sub.png'
import Sign from '../assets/images/signature.png'
import sign2 from '../assets/images/sign2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import mee from '../assets/images/me.png'

const Sidebar = () => {
  return (
    <>
    <div className='nav-bar'>

      <Link className='logo' to='/'>

        <img src={mee}  alt="logo" />
        <img className='sub-logo' src={Sign} alt="logosub" />
        {/* <img className='sub-logo2' src={sign2} alt="kulkarni" /> */}

      </Link>

      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active about-link" : "about-link")}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active contact-link" : "contact-link")}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active project-link" : "project-link")}
          to="/projects"
        >
          <FontAwesomeIcon icon={faTasks} color="#4d4d4e" />
        </NavLink>

      </nav>

      <ul>
        <li>
          <a target='_blank'
            rel='noreferrer'
            href="https://www.linkedin.com/in/shardulkulk297/">
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>

        <li>
          <a target='_blank'
            rel='noreferrer'
            href="https://github.com/shardulkulk297">
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>

        <li>
          <a target='_blank'
            rel='noreferrer'
            href="https://www.instagram.com/shardulkulk297/">
            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
          </a>
        </li>
      </ul>

    </div>
    </>
  )
}

export default Sidebar
