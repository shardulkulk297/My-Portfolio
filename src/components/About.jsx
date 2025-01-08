import React from 'react'
import AnimateLetters from './AnimateLetters'
import { useState, useEffect } from 'react'
import './Layout.scss'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setletterClass] = useState('text-animate');
    const [showContent, setShowContent] = useState(false)

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

    }, [])
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


                    <div className='stage-cube-cont'>
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faReact} color='Blue' />
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faNodeJs} color='Green' />
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faJsSquare} color='Yellow' />
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faHtml5} color='Orange' />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faGitAlt} color='Red' />
                            </div>
                        </div>

                    </div>




                </div>)}

            <Loader type="pacman"  />
        </>
    )
}

export default About
