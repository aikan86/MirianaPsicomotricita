import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

<Link to="/" className="navbar-logo" onClick={closeMenu}>
  <div className="logo-container">
    <span className="logo-title">Miriana Ferro</span>
    <span className="logo-subtitle">Psicomotricità</span>
  </div>
</Link>


  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <div className="logo-container">
          <span className="logo-title">Miriana Ferro</span>
          <span className="logo-subtitle">Psicomotricità</span>
        </div>
      </Link>

        {/* Icona hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {/* Menu navigazione */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chi-sono" className="nav-link" onClick={closeMenu}>
              Chi Sono
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/psicomotricita" className="nav-link" onClick={closeMenu}>
              Psicomotricità
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servizi" className="nav-link" onClick={closeMenu}>
              Servizi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contatti" className="nav-link" onClick={closeMenu}>
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
