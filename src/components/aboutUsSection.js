import React, { useState, useEffect } from 'react';
import "./aboutUs.css"
import ReactMarkdown from 'react-markdown'
import image1 from '../images/img-1.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-8.jpg';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';

// all ive got to do is add the images to the images array and then add the image paths to the images array maybe aso play around with sideimage styling in order to get th edimentions right 


function AboutUsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Add new state for image slideshow
  const images = [
    image1,
    image2,
    image3
    // Add your image paths here
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Full content of the About Us section
  const fullText = `
## Our Missions
We are priveledged to support a number of ministries, missionaries, and outreach programs that share the love of Christ and spread His message locally and globally, namely:\n
 Rocco Di Trolio - Argentina \n
 Stephen Ford - Peru \n
Jason & Lindsey Goldsberry - Chile \n

## First Assembly of God: A Legacy of Faith
First Assembly of God in Portland, Maine, has a rich legacy of faith that spans 
generations. \n 
Established in 1908 by Rev. Arthur Chase with just 12 attendees at 
its first gathering, the church began humbly in a rented space at the Swedish Baptist 
Church on Wilmot Street. Initially named Apostolic Faith Assembly, the church experienced 
remarkable growth, leading to the purchase of a house and barn at its current location, 
243 Cumberland Avenue, in 1917. \n 
The sanctuary was dedicated in 1918, and over the decades, 
the church underwent several name changes under the leadership of pastors like Rev. James 
Hicks, who renamed it Hephzibah Pentecostal Church, and Rev. L. Bernard Hinman, who 
renamed it First Assembly of God and led for 55 years until 2000.\n
 Despite challenges, 
including weather-related disruptions, the church has never closed its doors since 1918. 
Rooted in a strong foundation of ministry, including a Bible school and tent ministry,
 First Assembly of God remains steadfast in its mission to impact future generations for 
 Christ.

`;


  // Max length for truncation
  const maxLength = 500;

  // Handle toggle between see more and see less
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Conditionally render either the full text or a truncated version
  const displayedText = isExpanded ? fullText : fullText.slice(0, maxLength) + ' ...';

  return (
    <div className ='generalContainer'>
    <div className = 'background'>
    
    <section id="AboutUs"></section>
    <div className ="megacontainer">
    
    <h4>Learn about Us</h4>
    <div className="aboutUsContainer">
    
    <div className = "card-items">
      
      <p>
        <ReactMarkdown>{displayedText}</ReactMarkdown>
        {fullText.length > maxLength && (
        <button onClick={toggleExpanded} style={{ color: 'blue', cursor: 'pointer', border: 'none', background: 'none', fontSize: 20}}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
      </p> 
      
     
      </div> 
      <div className= "sideImage" 
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 0.5s ease-in-out'
        }}>
      </div>
    </div>
    </div>
    
    </div>
    </div>
  );
}

export default AboutUsSection;
