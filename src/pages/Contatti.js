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
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.nome.trim()) {
      errors.nome = 'Il nome è obbligatorio';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'L\'email è obbligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Formato email non valido';
    }
    
    if (!formData.telefono.trim()) {
      errors.telefono = 'Il numero di telefono è obbligatorio';
    } else if (!/^\d{8,15}$/.test(formData.telefono.replace(/\s+/g, ''))) {
      errors.telefono = 'Formato telefono non valido';
    }
    
    if (!formData.messaggio.trim()) {
      errors.messaggio = 'Il messaggio è obbligatorio';
    }
    
    if (!formData.privacy) {
      errors.privacy = 'Devi accettare la privacy policy per continuare';
    }
    
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
    const servizioInfo = formData.servizio ? `Interessato a: ${formData.servizio}` : "Richiesta generica";
    const testoMessaggio = `Ciao Miriana!%0A%0A` +
      `*Nuovo messaggio dal sito*%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefono:* ${formData.telefono}%0A` +
      `*Servizio:* ${servizioInfo}%0A%0A` +
      `*Messaggio:*%0A${formData.messaggio}`;

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${testoMessaggio}`;
    window.open(urlWhatsApp, '_blank');
    
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
                <a href="tel:+393457145906" className="contact-link">
                  +39 3457145906
                </a>
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
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/aleli_psicomotricita_genova" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Inviami un messaggio su WhatsApp</h2>
          {formSubmitted && (
            <div className="form-success">
              <p>Ti sto reindirizzando a WhatsApp...</p>
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome e Cognome *</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className={formErrors.nome ? 'error' : ''} placeholder="Il tuo nome" />
              {formErrors.nome && <span className="error-message">{formErrors.nome}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={formErrors.email ? 'error' : ''} placeholder="esempio@email.it" />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono *</label>
              <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className={formErrors.telefono ? 'error' : ''} placeholder="340 0000000" />
              {formErrors.telefono && <span className="error-message">{formErrors.telefono}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="servizio">Servizio di interesse</label>
              <select id="servizio" name="servizio" value={formData.servizio} onChange={handleChange}>
                <option value="">Seleziona un servizio</option>
                <option value="Psicomotricità educativa">Psicomotricità educativa</option>
                <option value="Laboratori nelle scuole">Laboratori nelle scuole</option>
                <option value="Altro">Altro / Informazioni</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="messaggio">Messaggio *</label>
              <textarea id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleChange} rows="5" className={formErrors.messaggio ? 'error' : ''} placeholder="Come posso aiutarti?"></textarea>
              {formErrors.messaggio && <span className="error-message">{formErrors.messaggio}</span>}
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} className={formErrors.privacy ? 'error' : ''} />
              <label htmlFor="privacy">Ho letto e accetto la <a href="/privacy-policy" target="_blank">Privacy Policy</a> *</label>
              {formErrors.privacy && <span className="error-message">{formErrors.privacy}</span>}
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                <i className="fab fa-whatsapp" style={{marginRight: '10px'}}></i>Invia via WhatsApp
              </button>
            </div>
            <p className="form-note">* Campi obbligatori</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contatti;