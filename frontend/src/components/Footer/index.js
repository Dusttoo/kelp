import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"



function Footer() {
    return (
      <div className="footer-main">
          <div className="credits">
            <h2>Who lives in a pineapple and codes lots of things?</h2>  
            <h3>Dusty Mumphrey</h3>
            <div>
              <a href="https://github.com/Dusttoo" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className="media"/></a>
              <a href="https://www.linkedin.com/in/dusty-mumphrey/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="media" /></a>
            </div>
            
          </div>
            
      </div>
    );
};

export default Footer;