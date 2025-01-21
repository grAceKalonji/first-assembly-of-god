import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from './Button';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import myImage from '../images/churchLogoWhite.png';

import "./navbar.css";

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 961); // Adjust the width as needed
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => 
    { showButton(); void
    showButton()
    }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
    <nav className="navbar">
        <div className= "navbar-container">
             <Link to = "/" className= "navbar-logo">
             <img src={myImage} alt="Logo" className='FAGLogo'/>
             </Link>
             
             <div className= "menu-icon" onClick = {handleClick}>
             <FontAwesomeIcon icon = {click ? faXmark : faBars} />
             </div>
             <ul className = {click ? "nav-menu active" : "nav-menu"}>
             <li className = "nav-item">
                <Link to = "/" className = "nav-links" onClick = {closeMobileMenu}>
                  Home 
                </Link>
             </li>
             <li className = "nav-item">
             <ScrollLink
          to="servicesSection" // Match this ID in your section
          className="nav-links"
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          Services
        </ScrollLink>
             </li>
             <li className = "nav-item">
             <ScrollLink
          to="AboutUs" // Match this ID in your section
          className="nav-links"
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          About Us
          </ScrollLink>
             </li>
             <li className = "nav-item">
             <a
               href="https://www.paypal.com"
               className="nav-links"
               onClick={closeMobileMenu}
               target="_blank"
               rel="noopener noreferrer"
             >
               PayPal
               
             </a>
             </li>
          {isMobile && (
            <li className = "nav-item">
              <Link to="/ContactUs" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          )}
             </ul>
             <Link to= "/ContactUs">
             {button && <button className="btn btn--outline btn--large"> Contact Us </button>}
             </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar