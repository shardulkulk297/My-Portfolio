import React, { useEffect } from 'react'
import './Home.scss'
import './Layout.scss'
import Sidebar from './Sidebar'
import Sign from '../assets/images/signature.png'
import LogoS from '../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimateLetters from './AnimateLetters'
import { useState } from 'react'
import Loader from 'react-loaders'
import dev from '../assets/images/Developer.svg'
import sk from '../assets/images/sk.JPEG'

const Home = () => {

    const [letterClass, setletterClass] = useState('text-animate');

    const nameArray = ['h', 'a', 'r', 'd', 'u', 'l'];
    const jobArray = ['F', 'u', 'l', 'l', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <Sidebar isHomePage={true} />
            <div>


                <div className='container home-page'>

                    <div className='text-zone'>
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i,</span>
                            <span> </span>
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>

                            <span> </span>
                            <span style={{ color: 'yellow', fontSize: '60px' }} className={`${letterClass} _15 firstChar`} >S</span>
                            <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                            <br />
                            <AnimateLetters letterClass={letterClass} strArray={jobArray} idx={15} />
                        </h1>
                        <h2>Full Stack | Spring Boot | React | Node.js | MySQL</h2>

                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                        <Link to="https://drive.google.com/file/d/1_xkQvaJi2_MZMSerz3COAQC1iQqluoc1/view?usp=sharing" className='flat-button'>RESUME</Link>
                    </div>

                </div>

            </div>

            <div className='devImg '>

                <img src={dev} alt="dev" />

            </div>

            <div className='self'>
                <a href="linked.com/shardulkulk297"><img src="https://i.ibb.co/LRNY972/sk.png" alt="sk" border="0" /></a>
            </div>

            {/* <Loader type='pacman' /> */}
        </>
    )
}

export default Home
