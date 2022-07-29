import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'contact_service',
            'template_4lb8pr2',
            refForm.current,
            'f7hglstdxDoOEMYGw'
        )
        .then(
            () => {
                alert('Message successfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={'Contact me'.split("")} idx={15} />
                </h1>
                <p>I am seeking new opportunities as a full-stack developer - open to both full-time positions and freelance work. Additionally, if you have any other questions, requests, or comments, please don't hesitate to contact me using the form below.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact