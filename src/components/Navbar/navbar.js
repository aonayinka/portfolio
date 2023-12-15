import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assects/navlogoAY.png';
import contactImg from '../../assects/icons8-call-24.png';
import { Link } from 'react-scroll';
import menu from '../../assects/menu.png'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMeanuListItem">Home</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="desktopMeanuListItem">About</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="desktopMeanuListItem">Client</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="desktopMeanuListItem">Review</Link>

            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView ({behavior:'smooth'});
            }}>
                <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me</button>

                <img src={menu} alt='Menu' className='mobMenu' onClick={() =>setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu (false)}>Home</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="ListItem" onClick={() => setShowMenu (false)}>About</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="ListItem" onClick={() => setShowMenu (false)}>Client</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className="ListItem" onClick={() => setShowMenu (false)}>Review</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className="ListItem" onClick={() => setShowMenu (false)}>Contact</Link>

            </div>    

        </nav>
    );
}

export default Navbar
