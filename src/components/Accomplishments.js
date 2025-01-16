import React, { useState, useEffect } from 'react';
import "./Accomplishments.css"
import ReactMarkdown from 'react-markdown'
import Quote from './Quote';
import image1 from '../img-1.jpg';
import image2 from '../img-2.jpg';
import image3 from '../img-8.jpg';

function Accomplishments() {

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

  

  return (
    <div className ='AccomplishmentsContainer'>
    <div className = 'backgroundAcc'>

    
    <div className ="megacontainerAcc">
    <h4>Learn about Us</h4>
    <div className="aboutUsContainerAcc">
    
    <div className = "card-itemsAcc scrollable">
      <h2>Evengalism Journey</h2>
      <p>
      ## Our Missions
We are priveledged to support a number of ministries, missionaries, and outreach programs that share the love of Christ and spread His message locally and globally, namely:<br />
 Rocco Di Trolio - Argentina <br />
 Stephen Ford - Peru <br />
Jason & Lindsey Goldsberry - Chile <br />
</p>
<h2>Community Contributions</h2>
<p>
## First Assembly of God: A Legacy of Faith
First Assembly of God in Portland, Maine, has a rich legacy of faith that spans 
generations. <br /> 
Established in 1908 by Rev. Arthur Chase with just 12 attendees at 
its first gathering, the church began humbly in a rented space at the Swedish Baptist 
Church on Wilmot Street. Initially named Apostolic Faith Assembly, the church experienced 
remarkable growth, leading to the purchase of a house and barn at its current location, 
243 Cumberland Avenue, in 1917. <br /> 
</p>

<h2>Future Plans</h2>
<p>
The sanctuary was dedicated in 1918, and over the decades, 
the church underwent several name changes under the leadership of pastors like Rev. James 
Hicks, who renamed it Hephzibah Pentecostal Church, and Rev. L. Bernard Hinman, who 
renamed it First Assembly of God and led for 55 years until 2000.<br />
 Despite challenges, 
including weather-related disruptions, the church has never closed its doors since 1918. 
Rooted in a strong foundation of ministry, including a Bible school and tent ministry,
 First Assembly of God remains steadfast in its mission to impact future generations for 
 Christ.
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
