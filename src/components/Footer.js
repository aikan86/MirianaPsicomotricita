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
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="footer-link-items">
              <h2>Naviga</h2>
              <Link to="/">Home</Link>
              <Link to="/chi-sono">Chi Sono</Link>
              <Link to="/psicomotricita">Psicomotricità</Link>
              <Link to="/servizi">Servizi</Link>
              <Link to="/contatti">Contatti</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Contatti</h2>
              <p><i className="fas fa-map-marker-alt"></i> Via Esempio 123, Città</p>
              <p><i className="fas fa-phone"></i> +39 123 456 7890</p>
              <p><i className="fas fa-envelope"></i> info@mirianaferro.it</p>
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
