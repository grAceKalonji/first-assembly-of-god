import React, { useState, useEffect } from 'react';
import "./HeroSection.css";
import "../App.css";
import video1 from '../videos/video-2.mp4';
import video2 from '../videos/video-1.MOV';



function HeroSection() {

  const videos = [
    { src: video1, text: "FIRST ASSEMBLY<br />OF<br />GOD" },
    { src: video2, text: "YEAR OF SOUL SAVING" },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 150000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const toggleVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className = "hero-container">
    <video src = {videos[currentVideoIndex].src} autoPlay loop muted/>
      <div className = 'card__divide1'>
      <div classname = 'card__divide__info-card1'>
      <h5 dangerouslySetInnerHTML={{ __html: videos[currentVideoIndex].text }} />
      {currentVideoIndex === 1 && (
        <p className="video-description" style={{ textAlign: 'center' }}>
        “Sow for yourselves<br /> righteousness; Reap in mercy; Break up your fallow ground, 
        For<br />  it is time to seek the LORD, Till He comes and rains righteousness<br />  
        on you.”<br /> Hosea 10:19 </p>
      )}
      {currentVideoIndex === 0 ? (
        windowWidth < 1024 ? (
          <p className="video-description" style={{ textAlign: 'center' }}>
            
          </p>
        ) : (
          <p className="video-description" style={{ textAlign: 'left' }}>
            <br /><br /><br /><br /><br />
          </p>
        )
      ) : null}

      </div>
      <button className="toggle-button" onClick={toggleVideo}>Next</button>

      </div>
      
    </div>
  )
}

export default HeroSection
