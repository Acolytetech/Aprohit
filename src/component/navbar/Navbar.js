import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navigation" className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container-fluid">
        <a className="navbar-brand white-logo" href="#">
          <img src={logo} className="img-fluid" alt="white logo" />
        </a>
        <a className="navbar-brand black-logo" href="#">
          <img src={logo} className="img-fluid" alt="black logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Toggle the collapse state
        >
          <span className="navbar-toggler-icon">&#9776;</span> {/* Hamburger icon */}
        </button>

        {/* Navbar links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          <span className="ps-3 d-none d-lg-block">
            <a
              href="https://themeforest.net/item/this-one-one-page-responsive-website-template/7236268?ref=alia"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              BUY NOW
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
