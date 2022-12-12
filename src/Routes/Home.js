import React from 'react'
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Footer />
        </div>
    )
}

export default Home