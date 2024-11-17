import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink } from 'react-scroll';


import "./navbar.css";

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);




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
            First Assembly of God
             </Link>
             <div className= "Menu-Icon" onClick = {handleClick}>
             <FontAwesomeIcon className = {click ? "fa-sharp fa-solid fa-bars" : "fa-sharp fa-solid fa-xmark"} />
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
             </ul>
             <Link to= "/ContactUs">
             {button && <button className="btn btn--outline"> Contact Us </button>}
             </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
