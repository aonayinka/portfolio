import { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import React from 'react'
import './navbar.css'
import { links } from '../../data'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className="nav_container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <span>Ay</span>Tec
            </Link>
            <ul className={`nav__links ${isNavShowing ?'show_nav' : 'hid__nav'}`}>
                {links.map(({name, path}, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' :
                        ''} onClick={() => setIsNavShowing(prev => !prev )} >{name}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev )}>{
                isNavShowing ? <IoMdClose /> : <FaBars />
            }
            </button>
        </div>

    </nav>
      
  )
}

export default Navbar
