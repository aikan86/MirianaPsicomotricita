import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Miriana Ferro <span className="navbar-subtitle">Psicomotricista</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chi-sono" className="nav-link" onClick={toggleMenu}>
              Chi Sono
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/psicomotricita" className="nav-link" onClick={toggleMenu}>
              Psicomotricità
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servizi" className="nav-link" onClick={toggleMenu}>
              Servizi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contatti" className="nav-link" onClick={toggleMenu}>
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
