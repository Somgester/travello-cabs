import React from 'react';
import './Footer.css';
import footImg from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={footImg} alt="Travello Logo" />
                    <p>
                        Travello - Cabs is a web application that allows you to book your drive across the country. 
                        We provide an easy-to-use interface and allow you to track your cab's current location in real-time.
                    </p>
                </div>
                <div className="footer-content-center">
                    <h2>Travello - Cabs</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+123-1004762738</li>
                        <li><a href="mailto:contact@travellocabs.com">contact@travellocabs.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © travellocabs.com - All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
