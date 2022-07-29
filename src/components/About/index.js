import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'About me'.split("")}
                    idx={15} />
                </h1>
                <p>
                Full-stack web developer with an innate ability to learn new technologies and languages quickly, strong practical experience, and an eagerness to take on new responsibilities. 
          </p>
          <p align="LEFT">
          Recently earned a web development certificate from the Georgia Institute of Technology with newly developed skills in JavaScript, CSS, and the MERN stack. I am an innovative problem solver and passionate about developing apps, with a focus on mobile-first design and development.
          </p>
          <p>
          My background as a seasoned and resourceful non-profit Executive Director, high-level marketer, and project manager gives me a unique approach as a team leader and motivator.
          </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNode} color='#659f62' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EF81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>

            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About