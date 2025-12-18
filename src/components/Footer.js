import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main-content">
          
          {/* SEZIONE SINISTRA */}
          <div className="footer-section profile-info">
            <h2>Miriana Ferro</h2>
            <p className="footer-description">Psicomotricista</p>
            <div className="social-icons">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/aleli_psicomotricita_genova?igsh=cWJtd2FzMzA2b244" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* SEZIONE DESTRA - Qui riaggiungiamo il titolo Contatti */}
          <div className="footer-section contact-info">
            <h2>Contatti</h2> 
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Genova</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+393457145906">+39 3457145906</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@mirianaferro-psicomotricista.it">info@mirianaferro-psicomotricista.it</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="website-rights">© {new Date().getFullYear()} Miriana Ferro. Tutti i diritti riservati.</p>
          <div className="footer-policy-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;