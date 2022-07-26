import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-m.png';
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                ac
                <br />
                web developer
                </h1>
                <h2>Fullstack Developer / JavaScript / Drummer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home