import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
    });
  };

  return (
    <div className="navbar-container">
      <ul className="navbar-items">
        <p>My logo</p>
        <li>
          <button className="navbar-button" onClick={handleScrollToTop}>
            Home
          </button>
        </li>
        <li>
          <Link
            activeClass="active"
            to="expertise"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Expertise
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Work experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="references"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            References
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
