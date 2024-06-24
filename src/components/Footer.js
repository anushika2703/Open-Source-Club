import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={`${process.env.PUBLIC_URL}/logo_placeholder.png`} alt="Open-source Club Logo" />
                    <span>Open-source Club</span>
                </div>
                <div className="footer-details">
                    <p>Contact Us:</p>
                    <p>Email: opensourceclub@vitbhopal.ac.in</p>
                    <p>Phone: +91 12345 67890</p>
                    <p>Address: VIT Bhopal University, Kothri Kalan, Sehore, Madhya Pradesh, 466114</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Open-source Club. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
