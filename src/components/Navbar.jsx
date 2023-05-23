import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="">Expertise</NavLink>
        </li>
        <li>
          <NavLink to="">Projects</NavLink>
        </li>
        <li>
          <NavLink to="">Work experience</NavLink>
        </li>
        <li>
          <NavLink to="">References</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
