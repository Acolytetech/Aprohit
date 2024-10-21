import React from 'react';
// import { FaTwitter, FaFacebookF, FaBehance, FaDribbble } from 'react-icons/fa';
import cssfooter from  './Footer.module.css'

const Footer = () => {
  return (
    <footer className={cssfooter.footer}>
      <div className={cssfooter.container_footer}>
        <div className={cssfooter.footer_row}>
          <div className={cssfooter.footer_col_12}>
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#portfolio">OUR PRODUCTS</a></li>
              <li><a href="#team">TEAMS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
        <div className={` ${cssfooter.footer_row} ${cssfooter.footer_pading}`}>
          <div className={cssfooter.footer_col_12}>
            {/* <ul className="socialmedia">
              <li><a href=""><FaTwitter /></a></li>
              <li><a href=""><FaFacebookF /></a></li>
              <li><a href=""><FaBehance /></a></li>
              <li><a href=""><FaDribbble /></a></li>
            </ul> */}
          </div>
        </div>
        <div className={` ${cssfooter.footer_row} ${cssfooter.pt_3} ${cssfooter.copyright}`}>
          <div className={cssfooter.footer_col_12}>
          PARUIT TRADING PRIVATE LIMITED © 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
