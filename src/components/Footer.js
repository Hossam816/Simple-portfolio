import React from 'react'
import "../styles/Footer.css"
import { FaHome , FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <p><FaHome /> 123 Housing Society. Egypt</p>
                    <p><FaPhone /> 1-2323-343-23</p>
                    <p><FaMailBulk /> hoso@gmail.com</p>
                </div>
                <div className='footer-text'>
                    <h4>About the company</h4>
                    <p>This is me hossam ragab, CEO & Founder of The Hoso. I enjoy discussing new projects and design challenges</p>
                    <div className='footer-social'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer