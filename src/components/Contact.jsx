import React, { useEffect, useState } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimateLetters from './AnimateLetters'

const Contact = () => {

    const [letterClass, setletterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <>

            <div className='container contact-page'>



                <div className="text-zone">

                    <h1>
                        <AnimateLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>

                    <p>
                        I am a passionate Full Stack Developer eager to bring ideas to life through technology. Whether you have queries, projects, or just want to connect, feel free to reach out—I'd love to collaborate and explore new opportunities!
                    </p>
                    <div className='contact-form'>

                        <form action="">
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='name' required />
                                </li>

                                <li className='half'>
                                    <input type="email" name='email' placeholder='email' required />
                                </li>

                                <li>
                                    <input type="text" placeholder='Subject' name='subject' required />
                                </li>

                                <li>
                                    <textarea name="Message" id="Message" required></textarea>
                                </li>

                                <li>
                                    <input type="submit" className='flat-buttonc' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>




                </div>





            </div>

            <Loader type='pacman' />


        </>
    )
}

export default Contact
