// HeroSection.js
import React from 'react';
import './style.css'; // Import your CSS file here

function HeroSection() {
  return (
<section id="hero" className="grid hero-section">
        <article className="hero-details">
            <p className="title-large">Your tranquillity oasis awaits</p>
            <p className="text-middle">TranquilTravels is designed to help you find a serene retreat for your next holidays. With us searching for the hotels nestled amidst picturesque landscapes is easier than ever. </p>
            <div className="hero-cards">
                <div className="card-image">
                    <p className="chip">New hotels <img src="./Assets/Arrow.svg"></img></p>
                </div>
                <div className="card-image">
                    <p className="chip">Best reviews <img src="./Assets/Arrow.svg"></img></p>
                </div>
            </div>
        </article>
        <div className="hero-image-container"></div>
    </section>
  );
}

export default HeroSection;
