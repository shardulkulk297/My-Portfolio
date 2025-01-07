import React from 'react'
import AnimateLetters from './AnimateLetters'
import { useState, useEffect } from 'react'
import './Layout.scss'
import './About.scss'

const About = () => {
    const [letterClass, setletterClass] =  useState('text-animate');

       useEffect(() => {
            return setTimeout(()=>{
                setletterClass('text-animate-hover')
            }, 3000)
        }, [])
  return (
    <div className='container about-page'>
        <div className='text-zone'>

            <h1>
                <AnimateLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={35}
                ></AnimateLetters>

                
            </h1>

            <p>I am an ambitious and passionate aspiring software engineer with a strong focus on front-end and full-stack web development. Currently pursuing my B.Tech in Computer Science and Engineering with a CGPA of 8.9, I am driven by the desire to create innovative and user-friendly applications. My journey is fueled by my commitment to growth, as I actively learn and improve my skills to become a skilled full-stack developer.</p>
                <p>Confidence defines my approach to challenges, and my projects highlight this trait. I developed a real-time collaborative code editor using React and Socket.IO to boost team productivity. At the SMART India Hackathon, I worked on a QR-based tourist information system built with React, Node.js, and AWS. Additionally, my Python-based platform for automating video creation, leveraging NLP and multimedia APIs, won recognition at DIPEX 2024. These projects reflect my ability to take on complex problems and deliver meaningful solutions.</p>
                <p>In one word, I am "evolving." My passion for learning and problem-solving, combined with my determination to excel, ensures that I continuously grow and make impactful contributions in the field of software development.</p>

        </div>
      
    </div>
  )
}

export default About
