import React from 'react'
import '../styles/HeroImage2.css';
import { Link } from 'react-router-dom';


function HeroImage(props) {
    return (
        <div className='hero-second'>
            <div className='mask-second'>
                <img className='into-img' src={props.imgSrc} alt="hero" />
            </div>
            <div className='second-content'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className='hero-btn'>
                </div>
            </div>
        </div>
    )
}

export default HeroImage