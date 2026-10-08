import React, { useState, useEffect } from 'react'
import './home.css'

const Home = () => {

    const images = [
        '/gym.jpg',
        '/wallpaper.jpg',
        '/wallpaper2.jpg',
        '/wallpaper3.jpg'
    ]

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="home" id="home">
            <div className="home-content">

                <div className="background">
                    <img
                        src={images[currentImage]}
                        alt="Gym background"
                    />
                </div>

                <div className="quotes">
                    <span>PUSH YOUR LIMITS</span>
                    <h1>BUILD YOUR</h1>
                    <h2>STRONGEST SELF</h2>
                    <p>
                        Train harder. Get stronger. Become unstoppable.
                    </p>
                </div>

                <div className="buttons">
                    <button className="join-btn" onClick={() => document.getElementById('contact').scrollIntoView({
                        behavior: 'smooth'
                    })}>
                        Contact
                    </button>
                    <button className="explore-btn" onClick={() => document.getElementById('pricing').scrollIntoView({
                        behavior: 'smooth'
                    })}>
                        Explore Programs
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home