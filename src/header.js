import React from 'react';
import './Header.css'; // For styling



const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src="./canadaFlag.png" alt="Logo" className="logo" />
   
          <p>Government of Canada</p>
          <p>Gouvernement du Canada</p>
       
      </div>
      <a className="Français" href='#'>Français</a>
      <div className="right">
        <input type="text" placeholder="Search IRCC" className="search-bar" />
        <img src="searchButton.png" alt="Search Icon" className="search-icon" />
      </div>
      
    </header>
  );
}

export default Header;