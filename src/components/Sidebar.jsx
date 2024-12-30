import React from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-s.png'
import LogoSubtitle from '../assets/images/logo_sub.png'
import Sign from '../assets/images/signature.png'

import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='nav-bar'>

        <Link className = 'logo' t='/'>

        <img src={LogoS} alt="logo" />
        <img className='sub-logo' src={Sign} alt="logosub" />

        </Link>

    </div>
  )
}

export default Sidebar
