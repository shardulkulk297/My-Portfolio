import React, { useEffect } from 'react'
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
    const jobArray = ['F', 'u', 'l', 'l', 'S', 't', 'a', 'c', 'k', ' ', 'D','e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        return setTimeout(()=>{
            setletterClass('text-animate-hover')
        }, 4000)
    }, [])
    
  return (
    <div>

        <div className='container home-page'>

            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <span> </span>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoS} alt="" />
                <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15}  />
                <br />
                <AnimateLetters letterClass={letterClass} strArray={jobArray} idx={15}  />
                </h1>
                <h2>MERN | CORE JAVA | PYTHON</h2>

                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
      
    </div>
  )
}

export default Home
