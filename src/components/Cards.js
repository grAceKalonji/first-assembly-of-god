import React from 'react';
import "./Cards.css";


function Cards() {
  return (
    <div className= "cards">
      <section id="servicesSection">
      <h3> Our church </h3>
      <div className= "Church__image">
      </div>

      <div className="card__divide">
      <div className="card__divide__info-cardL">
        <h1> Location </h1>
        <p>243 Cumberland Ave. <br/> Portland, ME 04101</p>
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
