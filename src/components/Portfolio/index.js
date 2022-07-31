import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img 
                                src={port.cover}
                                alt='portfolio'
                                className='portfolio-image' />
                                <div className='content'>
                                    <h4 className='title'>{port.title}</h4>
                                    <p className='technologies'>{port.technologies}</p>
                                    <p className='description'>{port.description}</p>
                                    <button className='btn' onClick={() => window.open(port.url)}>Deployed Link</button>
                                    <button className='btn' onClick={() => window.open(port.github)}>Github Link</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type='pacman' />
        </>
        );
}

export default Portfolio;