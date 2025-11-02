import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Servizi.css';

function Servizi() {
  return (
    <div className="servizi">
      <section className="page-header">
        <div className="header-container">
          <h1>I Miei Servizi</h1>
          <p>Percorsi personalizzati per ogni esigenza e fascia d'età</p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="services-container">
          <div className="service-card">
                      <div className="service-icon">
              <i className="fas fa-child"></i>
            </div>
            <h3>Psicomotricità per bambini (3-13 anni)</h3>
            <p><strong>Ambito educativo</strong></p>
            <p>
              Percorsi di prevenzione e sviluppo armonico per favorire il benessere globale del bambino,
              sostenendo la sua crescita motoria, emotiva e relazionale.
            </p>
            
            <p><strong>Ambito di aiuto</strong></p>
            <p>
              Interventi gruppo per bambini che vivono difficoltà emotive, relazionali o comportamentali.
              L'obiettivo è offrire uno spazio sicuro dove il bambino possa esprimere, comprendere e
              trasformare le proprie esperienze interiori.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Progetti per le scuole</h3>
            <p>
              Collaboro con scuole dell'infanzia, primarie e secondarie di primo grado per la realizzazione di
              <strong> progetti di psicomotricità educativa</strong>.
              Gli incontri vengono adattati agli obiettivi della classe, promuovendo la cooperazione, la
              gestione delle emozioni e l'inclusione.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Hai bisogno di ulteriori informazioni?</h2>
          <p>
          Desideri maggiori informazioni sui percorsi disponibili?
          Contattami per una consulenza gratuita e scopriamo insieme come accompagnare
          al meglio i bambini nel loro percorso di crescita.
          </p>
          <Link to="/contatti" className="btn-primary">
            Contattami ora
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Servizi;
