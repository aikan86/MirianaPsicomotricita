import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Psicomotricita.css';

function Psicomotricita() {
  return (
    <div className="psicomotricita">
      <section className="page-header">
        <div className="header-container">
          <h1>Cos'è la Psicomotricità?</h1>
          <p>E' uno spazio per crescere!</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>Il suo più grande obiettivo è:</h2>
           
            <p>
              Favorire lo <strong>sviluppo armonico</strong> del bambino, sostenendolo ed accompagnandolo durante il suo processo di crescita.
            </p>
          </div>
          <div className="intro-image">
            <img src="/images/psicomotricita-intro.jpg" alt="Psicomotricità" />
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="principles-container">
          <h2>Cosa permette al bambino di fare</h2>
          <div className="principles-grid">
            
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Esplorare</h3>
              <p>
                I bambini possono sviluppare una maggiore consapevolezza di sè tramite l’esplorazione del <strong>corpo</strong>,
                la scoperta delle proprie <strong>emozioni</strong> e l’espressione dei propri <strong>bisogni</strong>.
                Il <strong>gioco</strong> e il <strong>movimento</strong> sono le vie privilegiate per farlo!
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3>Valorizzare</h3>
              <p>
                La psicomotricità attribuisce <strong>importanza ai punti di forza</strong> dei singoli bambini.
                In questo modo contribuisce a sviluppare una <strong>sana autostima</strong>: attraverso il successo nelle attività psicomotorie,
                i bambini sviluppano una maggiore fiducia in se stessi.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Sostenere</h3>
              <p>
                Anche quando si affrontano sfide, la psicomotricità è un prezioso supporto.
                Attraverso situazioni di gioco, i bambini imparano a <strong>superare le difficoltà, scoprendo nuove soluzioni</strong>, spesso in modo creativo e strategico.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Riconoscere</h3>
              <p>
                Qui, ogni emozione viene legittimata e riconosciuta al bambino.
                I bambini imparano che tutte le emozioni sono importanti e cominciano a sviluppare la capacità di riconoscerle.
                Questo contribuisce a <strong>facilitare l’abilità di affrontare e gestire in modo sano le proprie emozioni.</strong>
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Creare e Immaginare</h3>
              <p>
                Sperimentando con il movimento e il gioco e utilizzando materiali non strutturati, i bambini coltivano la loro creatività e immaginazione.
                <strong>Creano</strong> storie, <strong>costruiscono</strong> fortezze, <strong>affrontano</strong> draghi e <strong>danno vita a creazioni straordinarie</strong>.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Socializzare e comunicare</h3>
              <p>
                La psicomotricità offre opportunità per interagire con gli altri bambini,
                permettendo loro di acquisire competenze sociali importanti come la <strong>condivisione e la cooperazione</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2>E' un percorso alla scoperta della propria identità</h2>
            <p>
              <strong> La psicomotricità è un trampolino di lancio per la crescita complessiva dei bambini, 
                per prepararli ad affrontare in modo sano le sfide della vita. </strong>
            </p>

          

      <section className="approaches-section">
        <div className="approaches-container">
          <h2>I principi fondamentali</h2>
         
          <div className="approach-card">
            <h3>Il piacere di agire</h3>
            <p>
              Il movimento e il gioco sono il punto di partenza di ogni scoperta.
              Dal piacere di muoversi nasce la fiducia in sé e nel mondo.
            </p>
          </div>

          <div className="approach-card">
            <h3>La relazione</h3>
            <p>
              La presenza empatica dell’adulto sostiene il percorso del bambino, 
              valorizzando ciò che è e accompagnandolo verso nuove conquiste.
            </p>
          </div>

          <div className="approach-card">
            <h3>La sicurezza affettiva</h3>
            <p>
              In un ambiente accogliente e stabile, 
              il bambino si sente libero di esprimere ciò che vive, sperimentando senza timore di sbagliare.
            </p>
          </div>

          <div className="approach-card">
            <h3>Il gioco simbolico</h3>
            <p>
              Giocando, il bambino dà forma alle proprie emozioni e rielabora vissuti profondi in modo creativo e trasformativo.
            </p>
          </div>
        </div>
      </section>


      <section className="faq-section">
        <div className="faq-container">
          <h2>Domande frequenti</h2>

          <div className="faq-item">
            <h3>A chi si rivolge la psicomotricità?</h3>
            <p>
              La psicomotricità si rivolge a persone di tutte le età, dai bambini agli anziani.
              Può essere proposta sia come percorso educativo e preventivo, sia come intervento
              specifico in presenza di difficoltà o disturbi.
            </p>
          </div>

          <div className="faq-item">
            <h3>Quanto dura un percorso di psicomotricità?</h3>
            <p>
              La durata varia in base agli obiettivi e alle necessità specifiche. Un percorso
              preventivo/educativo può durare alcuni mesi, mentre interventi specifici possono
              richiedere tempi più lunghi. Ogni situazione viene valutata individualmente.
            </p>
          </div>

          <div className="faq-item">
            <h3>Come si svolge una seduta di psicomotricità?</h3>
            <p>
              Una seduta tipo dura circa 45-60 minuti e si svolge in uno spazio appositamente
              attrezzato. Include solitamente una fase di accoglienza, un momento centrale
              dedicato ad attività specifiche o al gioco psicomotorio, e una fase finale di
              rilassamento e verbalizzazione dell'esperienza.
            </p>
          </div>

          <div className="faq-item">
            <h3>Qual è la differenza tra psicomotricità e fisioterapia?</h3>
            <p>
              Mentre la fisioterapia si concentra principalmente sugli aspetti fisici e
              funzionali del movimento, la psicomotricità considera la persona nella sua
              globalità, integrando aspetti motori, cognitivi, emotivi e relazionali.
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
            Prenota una consulenza
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Psicomotricita;