import React from 'react';
import "./HeroSection.css";
import "../App.css";



function HeroSection() {
  return (
    <div className = "hero-container">
    <video src = "/videos/video-2.mp4" autoPlay loop muted/>

      <div className = 'card__divide1'>
      <div classname = 'card__divide__info-card1'>
      <h5>FIRST ASSEMBLY <br/>OF <br/>GOD</h5>
      </div>
      <div classname = 'card__divide__info-card1'>
      <h5> Jesus will show<br/> you <br/>your worth </h5>
      </div>
      </div>

    </div>
  )
}

export default HeroSection
