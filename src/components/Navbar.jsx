/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-hot-toast';
import laptop from '../images/laptop.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 900);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      // acceleration until halfway, then deceleration
      smooth: 'true',
    });
  };

  const handleClick = () => {
    toast('Nothing to see here... Keep scrolling!', {
      icon: '👋',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {(isMenuOpen || isScreenWide) && (
        <ul className="navbar-items">
          <img src={laptop} alt="Laptop icon" onClick={handleClick} />
          <li>
            <button className="navbar-button" onClick={handleScrollToTop}>
              // HOME
            </button>
          </li>
          <li>
            <Link
              className="navbar-options"
              activeClass="active"
              to="expertise"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              // EXPERTISE
            </Link>
          </li>
          <li>
            <Link
              className="navbar-options"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              // PROJECTS
            </Link>
          </li>
          <li>
            <Link
              className="navbar-options"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              // WORK EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              className="navbar-options"
              activeClass="active"
              to="references"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              // REFERENCES
            </Link>
          </li>
          <li>
            <Link
              className="navbar-options"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              // CONTACT
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
