import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <h2>GYM APP</h2>
                    <p>
                        Push your limits. Build your strength.
                        Become the strongest version of yourself.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=123+Fitness+Street,+New+Delhi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📍123 Fitness Street, New Delhi
                    </a>
                    <a href="tel:+919876543210">📞 +91 98765 43210</a>
                    <a href="mailto:info@gymapp.com">✉ info@gymapp.com</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Gym App. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer