import React from 'react';
import "./HeroSection.css";
import "../App.css";



function HeroSection() {
  return (
    <div className = "hero-container">
    <video src = "/videos/video-2.mp4" autoPlay loop muted/>
      <h1> Jesus will show you <br/>your worth </h1>
      
      <div className = "hero-btns">
        <button className = "btn" buttonStyle = "btn--outline" buttonSize = "btn--large">
        <p> Start your Jorney </p>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
