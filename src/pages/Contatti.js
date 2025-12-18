import React, { useState } from 'react';
import '../styles/Contatti.css';

function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    servizio: '',
    privacy: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nome.trim()) errors.nome = 'Il nome è obbligatorio';
    if (!formData.email.trim()) {
      errors.email = 'L\'email è obbligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Formato email non valido';
    }
    if (!formData.telefono.trim()) errors.telefono = 'Il numero di telefono è obbligatorio';
    if (!formData.messaggio.trim()) errors.messaggio = 'Il messaggio è obbligatorio';
    if (!formData.privacy) errors.privacy = 'Devi accettare la privacy policy';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const numeroWhatsApp = "393457145906";
    const testoMessaggio = `Ciao Miriana!%0A%0A*Nuovo messaggio dal sito*%0A*Nome:* ${formData.nome}%0A*Email:* ${formData.email}%0A*Telefono:* ${formData.telefono}%0A*Messaggio:* ${formData.messaggio}`;
    window.open(`https://wa.me/${numeroWhatsApp}?text=${testoMessaggio}`, '_blank');
    
    setFormSubmitted(true);
    setFormData({ nome: '', email: '', telefono: '', messaggio: '', servizio: '', privacy: false });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="contatti">
      <section className="page-header">
        <div className="header-container">
          <h1>Contatti</h1>
        </div>
      </section>

      <section className="contact-grid">
        {/* SEZIONE SINISTRA: INFORMAZIONI ORDINATE A SINISTRA */}
        <div className="contact-info">
          <h2>Informazioni di contatto</h2>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>Indirizzo</h3>
              <p>Genova e provincia</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>Telefono</h3>
              <p>
                <a href="tel:+393457145906" className="contact-link">+39 3457145906</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@mirianaferro-psicomotricista.it" className="contact-link">
                  info@mirianaferro-psicomotricista.it
                </a>
              </p>
            </div>
          </div>
          
          <div className="social-media">
            <h3>Seguimi sui social</h3>
            <div className="social-icons">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/aleli_psicomotricita_genova" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* SEZIONE DESTRA: FORM */}
        <div className="contact-form-container">
          <h2>Scrivimi un messaggio</h2>
          {formSubmitted && (
            <div className="form-success">
              <p>Reindirizzamento a WhatsApp in corso...</p>
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome e Cognome *</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} className={formErrors.nome ? 'error' : ''} placeholder="Il tuo nome" />
              {formErrors.nome && <span className="error-message">{formErrors.nome}</span>}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={formErrors.email ? 'error' : ''} placeholder="esempio@email.it" />
            </div>
            <div className="form-group">
              <label>Telefono *</label>
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="340 0000000" />
            </div>
            <div className="form-group">
              <label>Messaggio *</label>
              <textarea name="messaggio" value={formData.messaggio} onChange={handleChange} rows="5" placeholder="Come posso aiutarti?"></textarea>
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} />
              <label>Accetto la <a href="/privacy-policy" target="_blank">Privacy Policy</a> *</label>
            </div>
            <button type="submit" className="btn-primary">
              <i className="fab fa-whatsapp" style={{marginRight: '10px'}}></i> Invia via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contatti;