import React from 'react';
import "./StackedCard.css";


function StackedCard() {
  return (
    <>
    <div classname = ""> 
    <h3> More about us </h3>
    </div>
    <div className= "StackedCard-container">
        <div className= "StackedCard-image">     
        </div>
        <div className= "InformationCard">
        <h1>Drake</h1>
        <p>We all crave adventure, relationships, and meaning. Whether you’re looking for a place to ask your questions or practical ways to transform your relationships, come explore with us.</p>
        </div>
    </div>
    <div className= "StackedCard-container">
        <div className= "InformationCard-1">
        <h1>Kendrick Lamar</h1>
        <p>We all crave adventure, relationships, and meaning. Whether you’re looking for a place to ask your questions or practical ways to transform your relationships, come explore with us.</p>
        </div>
        <div className= "StackedCard-image-1">     
        </div>
    </div>
    

    </>
  )
}

export default StackedCard;
