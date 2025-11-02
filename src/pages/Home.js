import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Psicomotricità</h1>
          <p>Crescere attraverso il movimento e la relazione</p>
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
              Sono Miriana Ferro, chinesiologa e psicomotricista relazionale in ambito educativo e preventivo.
              Mi occupo del benessere dei bambini e dei loro genitori.
            </p>
            <p>
              Mi piace occuparmi delle persone, sono appassionata del benessere e del movimento 
              in tutte le sue forme.
            </p>
            <p>
              Considero importante comprendere le straordinarie potenzialità del corpo, il canale 
              con il quale esplorare e conoscere l'ambiente ma anche e soprattutto con il quale è possibile esprimere se stessi.
            </p>
            <p>
              È questo il motivo che mi ha spinto prima a laurearmi in <strong>Scienze delle Attività Motorie e Sportive</strong> 
              e successivamente a specializzarmi in <strong>Psicomotricità Relazionale</strong>.
            </p>
            <p>
              Lavorare con i bambini è ciò che mi è più naturale e mi appaga in assoluto, farlo
              attraverso il gioco psicomotorio è il modo che preferisco!
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
            Vuoi saperne di più sui miei servizi o prenotare una sessione?
            Contattami per una consulenza personalizzata e scopri come la psicomotricità
            può essere utile per te o per i tuoi cari.
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


