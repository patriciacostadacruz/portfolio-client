import React from 'react'
import { Link } from 'react-scroll';

export default function NavbarItem({ to, label, handleMenuClick }) {
  return (
    <li>
      <Link
        className="navbar-options"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        onClick={handleMenuClick}
      >
        {label}
      </Link>
    </li>
  );
}
