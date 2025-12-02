import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero"><
        <div className="hero-container">
          <h1>Psicomotricità</h1>
          <p>è uno spazio per crescere</p>
          <div className="hero-btns">
            <Link to="/contatti" className="btn-primary">
              Prenota una consulenza
            </Link>
            <Link to="/servizi" className="btn-outline">
              Scopri i servizi
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-container">
          <div className="welcome-text">
            <h2>Benvenuti nel mio mondo</h2>
            <p>
              Sono Miriana e attraverso il gioco, il movimento e la relazione accompagno i bambini nel loro percorso di sviluppo,
              aiutandoli a conoscere se stessi, esprimere le emozioni e costruire fiducia nelle proprie capacità.
            </p>
            <p>
              Uno spazio sicuro in cui ogni bambino può sentirsi accolto e libero di esplorare, creare e crescere.
            </p>
            <p>
              <strong>La mia filosofia: </strong>La mia filosofia
            </p>
            <p>
              Mi piace dire che aiuto i bambini a fiorire.Come un giardiniere prepara il terreno perché ogni pianta cresca secondo la propria natura,
              così creo uno spazio accogliente dove ogni bambino possa sentirsi riconosciuto e valorizzato.
            </p>
            <p>
              Credo profondamente che ogni bambino porti già con sé risorse preziose: il mio compito è sostenerle, rispettando tempi, ritmi e unicità.
            </p>
            
            <Link to="/chi-sono" className="btn-text">
              Scopri di più su di me <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="welcome-image">
            <img src="/images/miriana-profile.jpg" alt="Miriana Ferro" />
          </div>
        </div>
      </section>

      {/* Navigation Buttons Section */}
      <section className="nav-buttons-section">
        <div className="nav-buttons-container">
          <Link to="/chi-sono" className="nav-button">
            <i className="fas fa-user"></i>
            <span>Chi Sono</span>
          </Link>
          <Link to="/psicomotricita" className="nav-button">
            <i className="fas fa-child"></i>
            <span>Psicomotricità</span>
          </Link>
          <Link to="/servizi" className="nav-button">
            <i className="fas fa-hands-helping"></i>
            <span>Servizi</span>
          </Link>
          <Link to="/contatti" className="nav-button">
            <i className="fas fa-envelope"></i>
            <span>Contatti</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Prenota una consulenza personalizzata</h2>
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

export default Home;


