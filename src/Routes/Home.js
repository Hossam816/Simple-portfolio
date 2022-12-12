import React from 'react'
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import image3 from '../assets/pexels-wendy-wei-14397945.jpg'

function Home() {
    return (
        <div>
            <Navbar />
            <HeroImage 
                title="hi, i'm a freelancer."
                text="react developer."
                imgSrc={image3}
            />
            <Footer />
        </div>
    )
}

export default Home