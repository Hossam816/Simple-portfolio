import React from 'react';
import "../styles/about.css"
import imagRe1 from '../assets/pexels-lukas-574073.jpg';
import imagRe2 from '../assets/pexels-markus-spiske-177598.jpg';
import {Link} from "react-router-dom"

function AboutData() {
    return (
        <div className='about-container'>
            <div className='data-contain'>
                <div className='data-text'>
                    <h2>Who Am I?</h2>
                    <p>Im a react Front-End Developer, i create responsive secuer websites for my clients. </p>
                    <Link to="/contact">
                        <button className='btn btn-warning '>CONTACT</button>
                    </Link>
                </div>
                <div className='img-data'>
                    <div className='content-img'>
                        <img src={imagRe1} alt='Data' />
                    <img src={imagRe2} alt='Data' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutData