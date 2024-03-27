/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-hot-toast';
import laptop from '../images/laptop.png';
import NavbarItem from './molecules/NavbarItem';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 900);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 900);
      if (!isScreenWide) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isScreenWide]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
    });
    handleMenuClick();
  };

  const handleClick = () => {
    toast('Nothing to see here... Keep scrolling!', {
      icon: '👋',
    });
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    if (!isScreenWide) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {(isMenuOpen || isScreenWide) && (
        <ul className="navbar-items" ref={menuRef}>
          <img src={laptop} alt="Laptop icon" onClick={handleClick} />
          <li>
            <button className="navbar-button" onClick={handleScrollToTop}>
              // HOME
            </button>
          </li>
          <NavbarItem
            to="expertise"
            label="// EXPERTISE"
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="projects"
            label="// PROJECTS"
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="experience"
            label="// WORK EXPERIENCE"
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="references"
            label="// REFERENCES"
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="contact"
            label="// CONTACT"
            handleMenuClick={handleMenuClick}
          />
        </ul>
      )}
    </div>
  );
}
