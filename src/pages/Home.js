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
              con il quale esplorare e conoscere l’ambiente ma anche e soprattutto con il quale è possibile esprimere se stessi.
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

      {/* Services Preview */}
      <section className="services-preview">
        <h2>I miei servizi</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-child"></i>
            </div>
            <h3>Psicomotricità per bambini</h3>
            <p>
              Percorsi dedicati allo sviluppo armonico delle capacità motorie, 
              cognitive ed emotive dei più piccoli.
            </p>
            <Link to="/servizi" className="service-link">
              Scopri di più
            </Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Attività di gruppo</h3>
            <p>
              Sessioni di gruppo per favorire la socializzazione, la cooperazione 
              e lo sviluppo di competenze relazionali.
            </p>
            <Link to="/servizi" className="service-link">
              Scopri di più
            </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>Consulenza per genitori</h3>
            <p>
              Supporto e orientamento per genitori ed educatori per comprendere 
              e valorizzare lo sviluppo psicomotorio.
            </p>
            <Link to="/servizi" className="service-link">
              Scopri di più
            </Link>
          </div>
        </div>
        <div className="services-cta">
          <Link to="/servizi" className="btn-primary">
            Tutti i servizi
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Testimonianze</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Grazie al percorso con Miriana, mio figlio ha migliorato notevolmente la coordinazione
                e la fiducia in sé stesso. Un'esperienza davvero positiva per tutta la famiglia."
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/images/testimonial1.jpg" alt="Testimonianza" className="testimonial-image" />
              <div className="testimonial-info">
                <h4>Laura B.</h4>
                <p>Mamma di Marco, 7 anni</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Come insegnante, ho apprezzato enormemente i consigli di Miriana per gestire 
                meglio le dinamiche motorie in classe. I suoi laboratori hanno trasformato positivamente 
                il gruppo."
              </p>
            </div>
            <div className="testimonial-author">
              <img src="/images/testimonial2.jpg" alt="Testimonianza" className="testimonial-image" />
              <div className="testimonial-info">
                <h4>Giulia M.</h4>
                <p>Insegnante scuola primaria</p>
              </div>
            </div>
          </div>
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
