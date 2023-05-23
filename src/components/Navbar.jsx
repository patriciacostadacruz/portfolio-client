import React from 'react';

export default function Navbar() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
          <a href="#expertise">Expertise</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Work experience</a>
        </li>
        <li>
          <a href="#references">References</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
