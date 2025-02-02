import React from 'react'
import "./donateSec.css"
import "./Cards.css"


function DonateSec() {
  return (
    <div className="donateContainer">
      <h2>Want to help ??</h2>
      <div className="donate-content">
      <div className="card_divide5">
      <div>
      <div className="paypal-image">
      </div>
        <a 
          href="https://www.paypal.com/donate?token=OPR7HolwiMW6eD9eRXfelcnMiWrkfsSCGpPraGSpvdE2QUKznSEA-R8idiXVXlJJEkuMVL2puN_b0Tad" 
          target="_blank" 
          rel="noopener noreferrer"
          className="donate-link"
        >
          Donate via PayPal
        </a>
        </div>

        <div>
        <div className="youtubeImage"></div>
        <a 
          href="https://www.youtube.com/@christosekklessia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="donate-link-Y"
        >
          Follow us on Youtube
        </a>
        </div>

        <div>
        <div className="facebookImage"></div>
        <a 
          href="https://www.facebook.com/search/top?q=firstassembly%20portland&__stsd__=eyJwcmltYXJ5Ijp7InR5cGUiOiJUWVBFQUhFQURfUEVPUExFX0VOVElUSUVTIn19" 
          target="_blank" 
          rel="noopener noreferrer"
          className="donate-link-F"
        >
          pray with us: Facebook
        </a>
        </div>

        </div>
      </div>
    </div>
  )
}

export default DonateSec
