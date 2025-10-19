import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Miriana Ferro</h2>
              <p className="footer-description">Specialista in Psicomotricità</p>
              <div className="social-icons">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/aleli_psicomotricita_genova?igsh=cWJtd2FzMzA2b244" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Contatti</h2>
              <p><i className="fas fa-map-marker-alt"></i> Genova</p>
              <p><i className="fas fa-phone"></i> +39 3457145906</p>
              <p><i className="fas fa-envelope"></i> miriana.ferro@yahoo.it</p>
            </div>
            <div className="footer-link-items">
              <h2>Orari</h2>
              <p>Lunedì - Venerdì: 9:00 - 18:00</p>
              <p>Sabato: 9:00 - 13:00</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="website-rights">© {new Date().getFullYear()} Miriana Ferro. Tutti i diritti riservati.</p>
          <div className="footer-policy-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
