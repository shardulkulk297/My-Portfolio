import React from 'react'
import './Layout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faGitSquare, faHtml5, faJava, faJsSquare, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import mdb from '../assets/images/mdb.svg'
import rest from '../assets/images/rest.png'
import sih from '../assets/images/sih.JPG'
import dipex from '../assets/images/dipex.JPG'
const Skills = () => {
    return (
        <>
        <div className='container skills-page'>
            <div className='text-zone '>
                <h1>Skills</h1>
                {/* <h2>Tech-Savvy Coder with a Passion for Innovation</h2> */}

                <div className='mainS'>
                    <div className='skills-content'>
                        <div className='skill-text'>
                            <h2>Programming Languages</h2>
                        </div>
                        <div className='icons'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faJsSquare} color='yellow' />

                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faPython} color='#00FFFF' />

                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faJava} color='red' />
                            </div>
                        </div>
                    </div>
                    <div className='skills-content'>
                        <div className='skill-text'>
                            <h2>Web Technologies, Libraries & Frameworks</h2>
                        </div>
                        <div className='icons'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faHtml5} color='Orange' />
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faCss3} color='Blue' />

                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faReact} color='Blue' />
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faNode} color='Green' />
                            </div>

                            <div className='icon'>
                                <img className='Rest' width={60} height={65} src={rest} alt="MongoDB" />

                            </div>
                        </div>

                    </div>

                    <div className='skills-content'>
                        <div className='skill-text'>
                            <h2>Data & Development Tools</h2>
                        </div>
                        <div className='icons'>
                            <div className='icon'>

                                <img width={60} src={mdb} alt="MongoDB" />

                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faGitAlt} color='Orange' />

                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faGithub} color='white' />
                            </div>

                        </div>

                    </div>

                    <div className='skills-content'>
                        <div className='skill-text'>
                            <h2>Soft Skills</h2>
                        </div>
                        <div className='icons'>
                            <p>Leadership</p>
                            <p>Communication</p>
                            <p>People Management</p>
                            <p>Video Editing</p>
                            <p>Content Creation</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className='devImg2 '>
             <img src={sih} alt="dev" /> 
             <p>Smart India Hackathon Grand Finalist 2023</p>
             <img src={dipex} alt="dev" /> 
             <p>DIPEX 2024 Finalist & General Championship Winner</p>
        </div>
        

    </>
        


    )
}

export default Skills
