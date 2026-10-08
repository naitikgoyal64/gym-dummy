import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <div className="contact-heading">
                <span>GET IN TOUCH</span>
                <h2>START YOUR<br />FITNESS JOURNEY</h2>

                <p>
                    Ready to take the next step? Visit us, give us a call,
                    or get in touch with our team today.
                </p>
            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <div className="contact-item">
                        <span className="contact-icon">📍</span>

                        <div>
                            <h4>Address</h4>
                            <p>123 Fitness Street, New Delhi</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">📞</span>

                        <div>
                            <h4>Phone</h4>
                            <a href="tel:+919876543210">
                                +91 98765 43210
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">✉</span>

                        <div>
                            <h4>Email</h4>
                            <a href="mailto:info@gymapp.com">
                                info@gymapp.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">⏰</span>

                        <div>
                            <h4>Opening Hours</h4>
                            <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps?q=Sector+62,+Noida,+Uttar+Pradesh&output=embed"
                        loading="lazy"
                        allowFullScreen
                        title="Gym Location"
                    ></iframe>
                </div>

            </div>

        </section>
    )
}

export default Contact