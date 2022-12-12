import React from 'react'
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar';
import iamge4 from '../assets/pexels-dziana-hasanbekava-6851455.jpg'
import AboutData from '../components/AboutData';

function About() {
    return (
        <div>
            <Navbar />
            <HeroImage2 
                title="ABOUT"
                text="im a friendly Front-End Developer"
                imgSrc={iamge4}
            />
            <AboutData />
            <Footer />
        </div>
    )
}

export default About