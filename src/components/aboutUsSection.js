import React, { useState, useEffect } from 'react';
import "./aboutUs.css"
import ReactMarkdown from 'react-markdown'
import image1 from '../img-1.jpg';
import image2 from '../img-2.jpg';
import image3 from '../img-8.jpg';
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
(2024)\n
Rocco Di Trolio - Argentina \n
Stephen Ford - Peru \n
Jason & Lindsey Goldsberry - Chile \n

## History
First Assembly of God: A Legacy of Faith.It was in divine love and wisdom that First Assembly of God was established to touch many generations in the city of Portland, the largest in the state of Maine.\n
Probably, the founder of the First Assembly of God, 243 Cumberland Ave, Portland, knew little about what the future of the church would be when it was started in 1908. This is when the Lord gave a burden to Rev Aurther Chase to reach people for Christ starting with 12 persons in attendance at the first gathering.\n

## A Humble Beginning
It was on a Sunday afternoon, at a rented space at the Swedish Baptist Church on Wilmot Street in Portland, that a soon-to-be vibrant congregation began and has spanned many generations.\n
The church was formed under the name of Apostolic Faith Assembly, which in later years went through several name changes. The dramatic growth of the church resulted in the permanance of the current location at 243 Cumberland Ave., with the purchasing of a house and a barn from Rev. Payson in 1917.\n

The current sanctuary was built and dedicated to the worship of the Lord on Sept. 8, 1918. Rev. Smith remained the shepherd of this congregation until his promotion to Glory in 1925. Rev. James Hicks, the next pastor of this congregation, changed the name to Hephzibah Pentecostal Church. For 20 years, the congregation experienced continued growth under the ministry of Rev. Hicks, including a Bible school and tent ministry. Following his promotion to Glory in 1945, Rev. L Bernard Hinman became the pastor of this congregation and changed the name to First Assembly of God. His faithful service lasted 55 years until his promotion to Glory in Sept. 2000.\n

## Looking to the Future
Rev. Paul E Johnson, a graduate of Hephzibah Bible School and the son-in-law of Rev. Hicks, became the interim pastor until Rev. M.S. Abraham became the pastor.\n
Except for weather-related cancellations, the church has not cancelled services, nor closed or moved since 1918—a unique feature of First Assembly of God. If Christ tarries, we trust God would use this church to impact many more generations to come.\n


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
    <section id="AboutUs">
    
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
    
    </section>
    </div>
    </div>
  );
}

export default AboutUsSection;
