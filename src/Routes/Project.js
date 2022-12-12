import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'
import image2 from '../assets/pexels-startup-stock-photos-7377.jpg'

function Project() {
    return (
        <div className='project'>
            <Navbar />
            <HeroImage2 
                title="PROJECTS"
                text="Some of my most recent works"
                imgSrc={image2}
            />
            <Footer />
        </div>
    )
}

export default Project