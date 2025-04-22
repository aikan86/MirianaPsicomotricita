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
    
    // Clear error for this field if it exists
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
    
    // Qui andrà il codice per inviare il form a un servizio di backend
    console.log('Form inviato:', formData);
    
    // Reset form e mostra messaggio di successo
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
      servizio: '',
      privacy: false
    });
    
    setFormSubmitted(true);
    
    // Nascondi il messaggio dopo 5 secondi
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contatti">
      <section className="page-header">
        <div className="header-container">
          <h1>Contatti</h1>
          <p>Sono qui per rispondere alle tue domande e aiutarti a trovare il percorso giusto per te</p>
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
              <p>Via Esempio 123</p>
              <p>12345 Città (Provincia)</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>Telefono</h3>
              <p>+39 123 456 7890</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@mirianaferro.it</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="info-content">
              <h3>Orari</h3>
              <p>Lunedì - Venerdì: 9:00 - 18:00</p>
              <p>Sabato: 9:00 - 13:00</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>
          
          <div className="social-media">
            <h3>Seguimi sui social</h3>
            <div className="social-icons">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Inviami un messaggio</h2>
          
          {formSubmitted && (
            <div className="form-success">
              <p>Grazie per avermi contattato! Ti risponderò al più presto.</p>
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome e Cognome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={formErrors.nome ? 'error' : ''}
              />
              {formErrors.nome && <span className="error-message">{formErrors.nome}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Telefono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={formErrors.telefono ? 'error' : ''}
              />
              {formErrors.telefono && <span className="error-message">{formErrors.telefono}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="servizio">Servizio di interesse</label>
              <select
                id="servizio"
                name="servizio"
                value={formData.servizio}
                onChange={handleChange}
              >
                <option value="">Seleziona un servizio</option>
                <option value="valutazione">Valutazione psicomotoria</option>
                <option value="bambini">Psicomotricità per bambini</option>
                <option value="gruppo">Attività di gruppo</option>
                <option value="adolescenti">Supporto per adolescenti</option>
                <option value="adulti">Psicomotricità per adulti</option>
                <option value="consulenza">Consulenza per genitori/educatori</option>
                <option value="laboratori">Laboratori nelle scuole</option>
                <option value="altro">Altro</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="messaggio">Messaggio *</label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                rows="5"
                className={formErrors.messaggio ? 'error' : ''}
              ></textarea>
              {formErrors.messaggio && <span className="error-message">{formErrors.messaggio}</span>}
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className={formErrors.privacy ? 'error' : ''}
              />
              <label htmlFor="privacy">
                Ho letto e accetto la <a href="/privacy-policy" target="_blank">Privacy Policy</a> *
              </label>
              {formErrors.privacy && <span className="error-message">{formErrors.privacy}</span>}
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Invia messaggio
              </button>
            </div>
            
            <p className="form-note">* Campi obbligatori</p>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Dove trovarmi</h2>
        <div className="map-container">
          {/* Qui andrebbe inserito il codice per una mappa interattiva, ad esempio con Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246112644!2d12.489838!3d41.902783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzEwLjAiTiAxMsKwMjknMjMuNCJF!5e0!3m2!1sit!2sit!4v1650000000000!5m2!1sit!2sit" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa dello studio"
          ></iframe>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2>Domande frequenti sui contatti</h2>
          
          <div className="faq-item">
            <h3>Quanto tempo ci vuole per ricevere una risposta?</h3>
            <p>
              Rispondo generalmente entro 24-48 ore lavorative. Per richieste urgenti, 
              ti consiglio di contattarmi telefonicamente.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>È necessario prenotare in anticipo?</h3>
            <p>
              Sì, è consigliabile prenotare con almeno una settimana di anticipo, soprattutto 
              per la prima valutazione. Per le sedute successive, concorderemo insieme un 
              calendario di appuntamenti.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>È possibile disdire o spostare un appuntamento?</h3>
            <p>
              Sì, è possibile disdire o spostare un appuntamento con almeno 24 ore di preavviso. 
              In caso contrario, potrebbe essere addebitato il costo della seduta.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contatti;
