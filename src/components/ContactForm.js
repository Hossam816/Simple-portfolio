import React from 'react'
import "../styles/ContactForm.css"
function ContactForm() {
    return (
        <div className='contact-form'>
            <form className='form-container'>
                <label>1.Your Name*</label>
                <input type="text" placholder="Name..." />
                <label>2.Email*</label>
                <input type="email" placholder="Email..." />
                <label>3.subject</label>
                <input type="text" placholder="Subject..." />
                <label>Message*</label>
                <textarea placeholder='Type Your Message Heer'></textarea>
            </form>
        </div>
    )
}

export default ContactForm