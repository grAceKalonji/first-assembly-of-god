import React from 'react';
import "./StackedCard.css";


function StackedCard() {
  return (
    <div className='backGround'>
    <div> 
    <h3> More about us </h3>
    </div>
    <div className= "StackedCard-container">
       
        <div className= "InformationCard-1">
        <h1>Pastor M S Abraham</h1>
        <p>Pastor M.S. Abraham, born and raised in India as the son of a pioneering missionary pastor, experienced God's calling through numerous miracles during his seminary and secular education. After completing his studies, he trained ministers in seminaries for five years, served as a convention speaker, church planter, and youth leader before immigrating to the USA. <br/>
           In Portland, ME, he joined First Assembly of God, assisting Pastors Hinman and Johnson while earning a Master's Degree in Counseling from the University of Southern Maine. Pastor Abraham became the senior pastor in May 2001, bringing spiritual growth and equipping believers for ministry. His visionary leadership continues to bless the church, alongside his wife, Molly, and their children, Faith, Evangeline, and Justin.</p>
        </div>
        <div className= "StackedCard-image-1">     
        </div>
    </div>
    <div className= "StackedCard-container">
        <div className= "InformationCard-1">
        <h1>Pastor Billa</h1>
        <p>We all crave adventure, relationships, and meaning. Whether you’re looking for a place to ask your questions or practical ways to transform your relationships, come explore with us. Vehicles with a sale date of “Upcoming Lot” have NOT been assigned to an auction and are NOT eligible for bidding yet. Add this vehicle to your Watchlist and Copart will let you know when a sale date is assigned and when you can start bidding.</p>
        </div>
        <div className= "StackedCard-image-1">     
        </div>
    </div>
    

    </div>
  )
}

export default StackedCard;
