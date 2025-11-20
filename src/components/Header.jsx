import React, { useState } from 'react';
import { useToggleNav } from '../hooks/useToggleNav';
const Header = () => {
  const {isMenuOpen,toggleMenu} = useToggleNav()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Style & Tech</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#accueil" onClick={toggleMenu}>Accueil</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
