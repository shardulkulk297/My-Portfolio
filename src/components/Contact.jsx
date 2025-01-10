import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimateLetters from './AnimateLetters'
import emailJs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setletterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) => {

        e.preventDefault()

        emailJs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                refForm.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

            )
            .then(
                () => {

                    toast.success("Message successfully Sent");
                    // window.location.reload(false);

                },
                () => {
                    toast.error("Failed to send Message")
                }

            )

    }

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

                        <form ref={refForm} onSubmit={sendEmail} action="">
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
                                    <textarea name="message" id="Message"
                                        placeholder='Message' required></textarea>
                                </li>

                                <li>
                                    <input type="submit" className='flat-buttonc' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>



                </div>
                <div className='info-map'>
                    Shardul Kulkarni
                    <br />
                    India,
                    <br />
                    Gananjay Nagar, College Road S.K House 21400 <br />
                    Kurundwad <br />
                    <span>shardulkulk297@gmail.com</span>

                </div>

                <div className="map-wrap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d955.4958355452957!2d74.5941449284296!3d16.67771699900171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736533515874!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />


                 
                </div>







            </div>

            <Loader type='pacman' />


        </>
    )
}

export default Contact
