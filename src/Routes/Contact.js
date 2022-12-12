import React from 'react'
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar';
import image1 from '../assets/pexels-chepté-cormani-1416530.jpg'
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div>
            <Navbar />
            <HeroImage2 
                title="CONTACT"
                text="Let's have a chat"
                imgSrc={image1}
            />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact