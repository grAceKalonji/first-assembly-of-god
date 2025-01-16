import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';
import { Button } from './Button';


function Cards() {
  return (
    <div className= "cards">
      <section id="servicesSection"> 
      <h3> Our church </h3>
      <div className= "Church__image">
      </div>


      <div className="donate-content">
      <div className="card_divide">
      <div>
      <div >
      <h1>What to expect</h1>
      <p style={{textAlign:"center"}}>
      At First Assembly of God, <br />
      you’ll find a warm, welcoming community,<br /> 
      uplifting worship, and inspiring messages <br />
      in a friendly faith-filled atmosphere.</p>
      </div>
        
        </div>

        <div >
        <div >
        <h1>Our Achievements</h1>
        <p style={{textAlign:"center"}}><a href="https://www.pressherald.com/2014/09/22/portland-church-finds-a-way-to-feed-the-multitudes/" target="_blank" rel="noopener noreferrer">From 2014</a>,
        to 2024, <br />
        First Assembly of God faithfully served <br />
        the Portland community through a Food Distribution Ministry<br />
        providing thousands of pounds of food <br />
        each week to families in need. <br />
        This ministry reflected our commitment <br />
        to sharing God’s love through service.</p>
       </div>
       <div className='alignment'>
       <Link to= "/Accomplishments" >
         <div className='whiteBackDefaultButton'>
         Learn More
          </div>
          </Link>
        </div>
        </div>

        <div>
        <div >
      <h1>What should I wear</h1>
      <p style={{textAlign:"center"}}>We dont have a formal dress code; <br />
      please wear clothes! <br />
      Other than that, just come as you are; <br /> 
      there are no expectations <br />
      when it comes to what you wear.</p>
      </div>
        
        </div>

        </div>
      </div>


      <div className="card__divide">
      <div className="card__divide__info-cardL">
        <h1> Location </h1>
        <p><a href="https://www.google.com/maps/dir/41.6677888,-70.9197824/243+Cumberland+Ave,+Portland,+ME+04101/@42.659059,-72.2509789,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4cb29c6b765c62eb:0xb07e8e044db62f83!2m2!1d-70.2574516!2d43.6606283?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">243 Cumberland Ave. <br/> Portland, ME 04101</a></p>
      </div> 
      <div className="card__divide__imageR" ></div>
      </div>

      <div className="card__divide1">
      <div className="card__divide__imageL" >
      </div>
      <div className="card__divide__info-cardR" >
        <h1> Scheduled Services </h1>
        <p>Sunday Morning Service: 10:00 AM <br/>
           Sunday Evening Worship – 6:30 PM <br/>
           Wednesday: Worship & Bible Study - 6:30 PM <br/>
           Ambassadors for Christ Bible Institute/Senior Youth Group 6:30 PM <br/>
           Friday Prayer Meeting - 4 PM TO 8 PM
        </p>
      </div>

      </div>
      </section>
      
    </div>
  )
}

export default Cards
