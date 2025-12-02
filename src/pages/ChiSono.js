import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChiSono.css';

import educativaImg from '../images/educativa.jpg';
import relazionaleImg from '../images/relazionale.jpg';
import preventivaImg from '../images/preventiva.jpg';
import profiloImg from '../images/miriana-profile-full.jpg';

function ChiSono() {
  return (
    <div className="chi-sono">
      <section className="page-header">
        <div className="header-container">
          <h1>Chi Sono</h1>
          <p>Conoscimi meglio: la mia storia, formazione e filosofia professionale</p>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-image">
            <img src={profiloImg} alt="Miriana Ferro" />
          </div>
          <div className="profile-bio">
            <h2>Miriana Ferro</h2>
            <h3>La mia filosofia</h3>
            <p>
              Sono chinesiologa e psicomotricista relazionale in ambito educativo e preventivo.
              Lavoro per il benessere dei bambini e delle loro famiglie, unendo il movimento, l’ascolto e la cura della relazione.
            </p>
            <p>
              Credo nel potere del corpo come primo canale di conoscenza e di espressione.
              Per questo, dopo la laurea in Scienze Motorie, mi sono specializzata in Psicomotricità Relazionale.
            </p>
            <p> Lavorare con i bambini è ciò che sento più naturale: accompagnarli nel gioco psicomotorio è il modo più autentico che conosco per sostenerli nella crescita.</p>
            <div className="profile-quote">
              <blockquote>
                "da pensare spermegacitazione con i controcazzi"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE CON LE 3 IMMAGINI */}
      <section className="approach-images-section">
        <div className="approach-container">
          <h2>Quella che faccio è Psicomotricità:</h2>
          <div className="images-grid">
            <div className="approach-image">
              <img src={educativaImg} alt="Approccio Educativo" />
            </div>
            <div className="approach-image">
              <img src={relazionaleImg} alt="Approccio Relazionale" />
            </div>
            <div className="approach-image">
              <img src={preventivaImg} alt="Approccio Preventivo" />
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2>Il mio approccio</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <p>
                Il mio lavoro si ispira all’approccio psicomotorio di <strong> Bernard Aucouturier </strong> che mette al centro il <strong>piacere di agire, giocare e creare</strong>.
                Attraverso il <strong>gioco simbolico</strong> e il <strong>movimento spontaneo</strong>, il bambino può elaborare emozioni, rappresentare la propria storia
                e costruire un’immagine positiva di sé.
              </p>
              <p>
                In questo percorso, l’adulto non dirige ma In questo percorso, l’adulto non dirige ma <strong>accompagna con ascolto e presenza</strong>, offrendo uno spazio sicuro in cui ogni bambino possa esprimersi, esplorare e crescere secondo i propri tempi.È un’esperienza che unisce corpo, emozione e pensiero, favorendo una crescita armonica e autenticaaccompagna con ascolto e presenza, offrendo uno spazio sicuro in cui ogni bambino possa esprimersi, 
                esplorare e crescere secondo i propri tempi.
                È un’esperienza che unisce corpo, emozione e pensiero, favorendo una crescita armonica e autentica.
              </p>
              <p>
                Ritengo fondamentale coinvolgere attivamente la famiglia e gli educatori nel percorso, 
                creando una rete di supporto che possa sostenere il processo di crescita e sviluppo anche 
                al di fuori delle sessioni di psicomotricità.
              </p>
            </div>
            <div className="philosophy-image">
              <img src="/images/philosophy.jpg" alt="La mia filosofia" />
            </div>
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

export default ChiSono;
