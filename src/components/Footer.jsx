import React from 'react'
import "../styles/Footer.css";
import andriodLogo from "../assests/playstore.jpg";
import iosLogo from "../assests/appstore.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col1">
          <p>Now Available on Play Store and App Store</p>
          <div>
            <img src={andriodLogo} alt="logo" className="footer-logo1" />
          </div>
          <div>
            <img src={iosLogo} alt="logo" className="footer-logo1" />
          </div>
        </div>

        <div className="col2">
          <a
            href="https://www.facebook.com/mrconqureror/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/babu_.patel_._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/uchiha-obito/?_l=en_US"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/anandkumarpatel1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://wa.me/+916203086263?text=hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
