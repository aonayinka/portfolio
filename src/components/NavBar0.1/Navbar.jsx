import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { links } from '../../data';
import './navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNav = () => setIsNavShowing(prev => !prev);

  return (
    <nav>
      <div className="nav_container">
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
          <span>Ay</span>Tec
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {links.map(({ name, path }) => (
            <li key={path}>
              <NavLink to={path} activeClassName="active-nav" onClick={toggleNav}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact"><button className='nav__btn btn'>Contact Me</button></Link>
        <button className="nav__toggle-btn" onClick={toggleNav}>
          {isNavShowing ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
