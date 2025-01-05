import React from 'react'
import './Home.scss'
import './Layout.scss'
import Sign from '../assets/images/signature.png'
import LogoS from '../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimateLetters from './AnimateLetters'
import { useState } from 'react'
const Home = () => {

    const [letterClass, setletterClass] =  useState('text-animate');

    const nameArray = ['h', 'a', 'r', 'd', 'u', 'l'];
    const jobArray = ['D','e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  return (
    <div>

        <div className='container home-page'>

            <div className='text-zone'>
                <h1>Hi, <br/> I'm 
                <img src={LogoS} alt="" />
                <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15}  />
                <br />
                FullStack Developer
                </h1>
                <h2>MERN | CORE JAVA | PYTHON</h2>

                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
      
    </div>
  )
}

export default Home
