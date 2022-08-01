import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-m.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import Photo from './Photo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
                <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="web developer name" />
                    <span>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'ac Schmitz'.split("")}
                    idx={15} />
                    </span>
                    <br />
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'web developer.'.split("")}
                    idx={22} />
                    </h1>
                    <h2>Fullstack Developer / JavaScript / Drummer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Photo />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home