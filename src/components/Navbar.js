import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={`${process.env.PUBLIC_URL}/logo_placeholder.png`} alt="Open-source Club Logo" />
                <span>Open-source Club</span> {/* Optional: Add text next to the logo */}
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contribute">Contribute</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
