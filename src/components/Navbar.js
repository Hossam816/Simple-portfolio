import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [scroll, setScroll] = useState(false)

    const changeColor = () => {

        if(window.scrollY >= 100){

        setScroll(true)

    } else {

        setScroll(false)
    }
    };

    window.addEventListener("scroll", changeColor)

    return (
        <div className={scroll ? "header header-bg": "header"}>
            <Link to='/'>
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? 'active' : ''}>

                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/project'>Project</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"#fff"}} />):(<FaBars size={20} style={{color:"#fff"}} />)}
            </div>
        </div>
    )
}

export default Navbar