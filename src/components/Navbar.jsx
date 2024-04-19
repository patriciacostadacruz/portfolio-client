/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-hot-toast';
import laptop from '../images/laptop.png';
import NavbarItem from './molecules/NavbarItem';
import { useTranslation } from 'react-i18next';
import LanguageBar from './molecules/LanguageBar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 900);
  const { t } = useTranslation("global")
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
    toast(t("toaster.navbar"), {
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

  useEffect(() => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer && isMenuOpen) {
      portfolioContainer.classList.toggle('blur-content');
    } else if (!isMenuOpen) {
      portfolioContainer.classList.remove('blur-content');
    }
  }, [isMenuOpen]);

  return (
    <div className="navbar-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="navbar-initials">PCC</p>
      {(isMenuOpen || isScreenWide) && (
        <ul className="navbar-items" ref={menuRef}>
          <img src={laptop} alt="Laptop icon" onClick={handleClick} />
          <li>
            <button className="navbar-button" onClick={handleScrollToTop}>
              // {t('home').toUpperCase()}
            </button>
          </li>
          <NavbarItem
            to="expertise"
            label={`// ${t('expertise').toUpperCase()}`}
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="experience"
            label={`// ${t('experience').toUpperCase()}`}
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="projects"
            label={`// ${t('projects').toUpperCase()}`}
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="references"
            label={`// ${t('references').toUpperCase()}`}
            handleMenuClick={handleMenuClick}
          />
          <NavbarItem
            to="contact"
            label={`// ${t('contact').toUpperCase()}`}
            handleMenuClick={handleMenuClick}
          />
          <LanguageBar />
        </ul>
      )}
    </div>
  );
}
