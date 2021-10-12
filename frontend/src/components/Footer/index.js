import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    console.log("testing")
    return (
      <div className="footer-main">
          <div className="credits">
            <h2>Dusty Mumphrey</h2>  
            <i className="fas fa-brands fa-linkedin-in"/>  
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </div>
            
      </div>
    );
};

export default Footer;