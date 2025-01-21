import React, { useState, useEffect } from 'react';
import "./Accomplishments.css"
import ReactMarkdown from 'react-markdown'
import Quote from './Quote';
import image10 from '../images/communityImage.jpeg';
import image20 from '../images/locationImage.jpg';
import image30 from '../images/evangelism.jpg';

function Accomplishments() {

  // Add new state for image slideshow
  const images = [
    image10,
    image20,
    image30
    // Add your image paths here
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const fullText = `
## Evengalism Journey
We are priveledged to support a number of ministries, missionaries, and outreach programs that share the love of Christ and spread His message locally and globally, namely:\n
 Rocco Di Trolio - Argentina \n
 Stephen Ford - Peru \n
Jason & Lindsey Goldsberry - Chile \n

## Community Constributions
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
## Future Plans 
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
    <div className ='AccomplishmentsContainer'>
    <div className = 'backgroundAcc'>

    
    <div className ="megacontainerAcc">
    <h4>More about Us</h4>
    <div className="aboutUsContainerAcc">
    
    <div className = "card-itemsAcc">

    <p>
        <ReactMarkdown>{displayedText}</ReactMarkdown>
        {fullText.length > maxLength && (
        <button onClick={toggleExpanded} style={{ color: 'blue', cursor: 'pointer', border: 'none', background: 'none', fontSize: 20}}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
      </p> 

      </div> 
      <div className= "sideImageAcc" 
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 0.5s ease-in-out'
        }}>
      </div>
    </div>
    </div>
    
    </div>
     <Quote/>
    </div>
    
  );
}

export default Accomplishments
