import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/jobs">Jobs </a> </li>
      
        <li><a href="/immigration">Immigration</a></li>
        <li><a href="/travel">Travel</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/benefits">Benefits</a></li>
        <li><a href="/health">Health</a></li>
        <li><a href="/taxes">Taxes</a></li>
        <li><a href="/more-services">More Services</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;