import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-m.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // let myName = 'ac Schmitz'
    // const nameArray = myName.split("")
    const nameArray = ['a', 'c', ' ', 'S', 'c', 'h', 'm', 'i', 't', 'z']
    // let myJob = "web developer."
    // const jobArray = myJob.split("")
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    {/* <h1>
                        Hi,
                        <br />
                        I'm 
                        <img src={LogoTitle} alt="web developer name" />
                        ac Schmitz
                        <br />
                        web developer.
                    </h1> */}
                <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="web developer name" />
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    stringArray={nameArray} 
                    idx={15}
                    />
                    <br />
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    stringArray={jobArray} 
                    idx={22}
                    />
                    </h1>
                    <h2>Fullstack Developer / JavaScript / Drummer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo></Logo>
            </div>
        </>
    )
}

export default Home