import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to="/" className='logo'>
                    <span>Ay</span>Tec
                </Link>
                <p>
                A reliable customer-focused IT Analyst with a broad range of operational and IT technical skills. Regular contribution of
ideas and solutions for changes to IT helpdesk processes and quality procedures brings about significant progress
within the Technical Team.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target='_black' rel='noreferrer noopener'>{<FaLinkedinIn />}</a>
                    <a href="https://linkedin.com" target='_black' rel='noreferrer noopener'>{<FaWhatsapp />}</a>
                    <a href="https://linkedin.com" target='_black' rel='noreferrer noopener'>{<FaXTwitter/>}</a>
                    <a href="https://linkedin.com" target='_black' rel='noreferrer noopener'>{<FaInstagram/>}</a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/events">Events</Link>
                <Link to="/faqs">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2024 AyTec &copy; All Rights Reserved</small>
        </div>
    </footer>
   
  )
}

export default Footer

