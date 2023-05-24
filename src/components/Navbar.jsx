/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      // acceleration until halfway, then deceleration
      smooth: 'true',
    });
  };

  return (
    <div className="navbar-container">
      <ul className="navbar-items">
        <p>My logo</p>
        <li>
          <button className="navbar-button" onClick={handleScrollToTop}>
            // home
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
            // expertise
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
            // projects
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
            // work experience
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
            // references
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
            // contact
          </Link>
        </li>
      </ul>
    </div>
  );
}