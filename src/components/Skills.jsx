import React from 'react'
import './Layout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faGitSquare, faHtml5, faJava, faJsSquare, faNodeJs, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import mdb from '../assets/images/mdb.svg'
import rest from '../assets/images/rest.png'
import './About.scss'
import Loader from 'react-loaders'

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

            {/* <Loader type='pacman' /> */}


        </>



    )
}

export default Skills
