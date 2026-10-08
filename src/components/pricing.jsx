import React from 'react'
import './pricing.css'

const Pricing = () => {
    return (

        <section className="pricing" id="pricing">

            <h2>Our Plans</h2>
            <p className="pricing-subtitle">
                Choose the plan that fits your fitness goals.
            </p>

            <div className="pricing-container">

                <div className="price-card">
                    <h3>Basic</h3>
                    <h4>₹999 <span>/ Month</span></h4>

                    <ul>
                        <li>✔ Gym Access</li>
                        <li>✔ Cardio Equipment</li>
                        <li>✔ Basic Workout Plan</li>
                        <li>✖ Personal Trainer</li>
                    </ul>

                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Join Now</button>
                </div>

                <div className="price-card popular">
                    <div className="popular-tag">POPULAR</div>

                    <h3>Standard</h3>
                    <h4>₹1499 <span>/ Month</span></h4>

                    <ul>
                        <li>✔ Full Gym Access</li>
                        <li>✔ Cardio & Strength Training</li>
                        <li>✔ Workout Plan</li>
                        <li>✔ Trainer Guidance</li>
                    </ul>

                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Join Now</button>
                </div>

                <div className="price-card">
                    <h3>Premium</h3>
                    <h4>₹2499 <span>/ Month</span></h4>

                    <ul>
                        <li>✔ Unlimited Gym Access</li>
                        <li>✔ Personal Trainer</li>
                        <li>✔ Custom Workout Plan</li>
                        <li>✔ Diet Guidance</li>
                    </ul>

                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Join Now</button>
                </div>

            </div>
        </section>
    )
}

export default Pricing