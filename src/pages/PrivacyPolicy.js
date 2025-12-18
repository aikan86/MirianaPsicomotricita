import React from 'react';
import '../styles/App.css'; // Usa gli stili generali

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <section className="page-header">
        <div className="header-container">
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="container" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h3>1. Titolare del Trattamento</h3>
        <p>Il Titolare del trattamento è Miriana Ferro, Email: info@mirianaferro-psicomotricista.it</p>
        
        <h3>2. Dati Raccolti</h3>
        <p>Raccogliamo nome, email e numero di telefono tramite il modulo contatti al solo fine di ricontattarti.</p>
        
        <h3>3. WhatsApp</h3>
        <p>Utilizzando il tasto di invio, i dati verranno trasferiti all'applicazione WhatsApp per permettere la messaggistica diretta.</p>
        
        <h3>4. I tuoi diritti</h3>
        <p>Puoi richiedere la cancellazione o la modifica dei tuoi dati in qualsiasi momento scrivendo all'indirizzo email sopra indicato.</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;