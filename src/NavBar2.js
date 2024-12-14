import React from 'react';
import './NavBar.css';

const NavBar2 = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/Definition">Definition </a> </li>
        <li><a href="/FAQ">Frequently asked Questions(FAQ)</a></li>
        <li><a href="/Help">Help</a></li>
      </ul>
    </nav>
  );
}

export default NavBar2;