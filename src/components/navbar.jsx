import React from 'react';
import { useState } from 'react';
import './navbar.css';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar" id="navbar">
            <nav>

                <div className="logo">
                    <img src="logo.jpeg" alt="Logo Image" />
                    <h2>Gym App</h2>
                </div>

                <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About Us</a></li>
                        <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
                        <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
                    </ul>
                </div>

                <button
                    className={`menu-btn ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>
        </div>
    );
};

export default Navbar;
