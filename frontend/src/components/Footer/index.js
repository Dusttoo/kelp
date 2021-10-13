import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"



function Footer() {
    console.log("testing")
    return (
      <div className="footer-main">
          <div className="credits">
            <h2>Dusty Mumphrey</h2>  
            <div>
              <a href="https://github.com/Dusttoo" target="_blank"><FontAwesomeIcon icon={faGithub} className="media"/></a>
              <a href="https://www.linkedin.com/in/dusty-mumphrey/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="media" /></a>
            </div>
            
          </div>
            
      </div>
    );
};

export default Footer;