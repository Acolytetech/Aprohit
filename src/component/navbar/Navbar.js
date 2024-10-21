import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track the active section
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu

  // Handle scroll event to change the navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'blog', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 70; // Adjust for navbar height
          const bottom = top + element.offsetHeight;
          if (offset >= top && offset < bottom) {
            setActiveSection(section); // Update active section
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle navbar open/close
  };

  return (
    <nav id="navigation" className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container-fluid">
        <div className="navbar-brand white-logo">
          <div>

          <img src={logo} className="img-fluid" alt="white logo" />
          </div>
          <h5>Paruit  Trading</h5>
        </div>
        <div className="navbar-brand black-logo">
          <img src={logo} className="img-fluid" alt="black logo" />
          <h5>Paruit  Trading</h5>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <p
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
              >
                Home
              </p>
            </li>
            <li className="nav-item">
              <p
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                About
              </p>
            </li>
            <li className="nav-item">
              <p
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                Services
              </p>
            </li>
            <li className="nav-item">
              <p
                className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                Our Products
              </p>
            </li>
            <li className="nav-item">
              <p
                className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}
                onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
              >
                Team
              </p>
            </li>
            <li className="nav-item">
              <p
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
