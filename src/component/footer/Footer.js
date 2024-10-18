import React from 'react';
// import { FaTwitter, FaFacebookF, FaBehance, FaDribbble } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-row">
          <div className="footer-col-12">
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="#team">Teams</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-row footer-pading">
          <div className="footer-col-12">
            {/* <ul className="socialmedia">
              <li><a href=""><FaTwitter /></a></li>
              <li><a href=""><FaFacebookF /></a></li>
              <li><a href=""><FaBehance /></a></li>
              <li><a href=""><FaDribbble /></a></li>
            </ul> */}
          </div>
        </div>
        <div className="footer-row pt-3 copyright">
          <div className="footer-col-12">
            THISONE © 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
