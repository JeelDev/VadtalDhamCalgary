import React from "react";
import "../styles/style.css"; // Create this file for footer specific styles
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="footer-logos">
        <a
          href="https://www.facebook.com/people/Vadtaldhamcalgary/61553391813715/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/icons/facebook.png" alt="Event" />
        </a>
        <a
          href="https://www.youtube.com/@ssausm_calgary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/icons/youtube.png" alt="YouTube" />
        </a>
        <a
          href="https://maps.app.goo.gl/nw22z85fj3NQFk5M8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/icons/map.png" alt="WhatsApp" />
        </a>
        <a
          href="https://chat.whatsapp.com/EXIMnRf5X7v9ICSSyyE43M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/icons/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
      <div className="footer-section">
                <NavLink to="/contact" className="footer-link">
                    Contact Us
                </NavLink>
            </div>
            <div className="footer-section">
                <NavLink to="/contact" className="footer-link">
                    Donate Us
                </NavLink>
            </div>
    </footer>
  );
};

export default Footer;
