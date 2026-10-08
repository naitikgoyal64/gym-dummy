import React from 'react'
import './about.css'

const About = () => {
    return (
        <section className="about" id="about">

            <div className="about-heading">
                <span>ABOUT US</span>
                <h2>MORE THAN JUST<br />A GYM</h2>
            </div>

            <div className="about-content">

                <div className="about-image">
                    <img src="/logo.jpeg" alt="Gym training" />
                </div>

                <div className="about-info">

                    <h3>Build Your Strongest Self</h3>

                    <p>
                        We believe fitness is not just about lifting weights.
                        It is about building discipline, confidence and a
                        stronger version of yourself every day.
                    </p>

                    <p>
                        With quality equipment, a motivating environment and
                        proper guidance, we help you stay consistent and work
                        towards your fitness goals.
                    </p>

                    <div className="about-stats">

                        <div className="stat">
                            <h4>10+</h4>
                            <span>Years Experience</span>
                        </div>

                        <div className="stat">
                            <h4>500+</h4>
                            <span>Happy Members</span>
                        </div>

                        <div className="stat">
                            <h4>15+</h4>
                            <span>Expert Trainers</span>
                        </div>

                    </div>

                    <a href="#contact" className="about-btn">
                        Get Started
                    </a>

                </div>

            </div>

        </section>
    )
}

export default About