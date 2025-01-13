import React from 'react'
import AnimateLetters from './AnimateLetters'
import { useState, useEffect } from 'react'
import './Layout.scss'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { useLocation } from 'react-router-dom'
import sih from '../assets/images/sih.JPG'
import dipex from '../assets/images/dipex.JPG'
const About = () => {

    const [letterClass, setletterClass] = useState('text-animate');
    const [showContent, setShowContent] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const contentTimer = setTimeout(() => {
            setShowContent(true)
        }, 1000) // Match this with your loader's delay (4.5s)

        const letterTimer = setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 3000) // This should start after content is visible

        return () => {
            clearTimeout(contentTimer)
            clearTimeout(letterTimer)
        }

    }, [location])
    return (

        <>

            {showContent && (
                <div className='container about-page'>
                    <div className='text-zone'>

                        <h1>
                            <AnimateLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                                idx={15}
                            ></AnimateLetters>


                        </h1>

                        <p>I am an ambitious and passionate aspiring software engineer with a strong focus on front-end and full-stack web development. Currently pursuing my B.Tech in Computer Science and Engineering with a CGPA of 8.9, I am driven by the desire to create innovative and user-friendly applications. My journey is fueled by my commitment to growth, as I actively learn and improve my skills to become a skilled full-stack developer.</p>
                        <p>Confidence defines my approach to challenges, and my projects highlight this trait. I developed a real-time collaborative code editor using React and Socket.IO to boost team productivity. At the SMART India Hackathon, I worked on a QR-based tourist information system built with React, Node.js, and AWS. Additionally, my Python-based platform for automating video creation, leveraging NLP and multimedia APIs, won recognition at DIPEX 2024. These projects reflect my ability to take on complex problems and deliver meaningful solutions.</p>
                        <p>In one word, I am "evolving." My passion for learning and problem-solving, combined with my determination to excel, ensures that I continuously grow and make impactful contributions in the field of software development.</p>

                    </div>






                </div>)}

            <div className='devImg2 '>
                <img src={sih} alt="dev" />
                <p>Smart India Hackathon Grand Finalist 2023</p>
                <img src={dipex} alt="dev" />
                <p>DIPEX 2024 Finalist & General Championship Winner</p>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default About
