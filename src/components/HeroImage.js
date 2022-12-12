import React from 'react'
import '../styles/HeroImage.css';
import image1 from '../assets/pexels-wendy-wei-14397945.jpg';
import { Link } from 'react-router-dom';


function HeroImage() {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={image1} alt="hero" />
            </div>
            <div className='hero-content'>
                <p>hi, i'm a freelancer.</p>
                <h1>react developer.</h1>
                <div className='hero-btn'>
                    <Link to="/project">
                        <button className='btn btn-warning btn-lg'>PROJECT</button>
                    </Link>
                    <Link to='/contact'>
                        <button className='btn btn-outline-warning btn-lg'>CONTACT</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage