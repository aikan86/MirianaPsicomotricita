import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Psicomotricita.css';

function Psicomotricita() {
  return (
    <div className="psicomotricita">
      <section className="page-header">
        <div className="header-container">
          <h1>Cos'è la Psicomotricità</h1>
          <p>Scopri i principi, i benefici e le applicazioni di questa disciplina</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>La psicomotricità: un approccio integrato</h2>
            <p>
              La psicomotricità è una disciplina che considera la persona nella sua globalità, 
              riconoscendo la profonda interconnessione tra aspetti motori, cognitivi, emotivi e relazionali.
            </p>
            <p>
              Partendo dal presupposto che corpo e mente sono inscindibili, la psicomotricità 
              valorizza il movimento come strumento di espressione, comunicazione e apprendimento.
            </p>
            <p>
              Attraverso esperienze corporee guidate, questa disciplina favorisce lo sviluppo 
              armonico della persona, promuovendo una migliore conoscenza di sé, delle proprie 
              potenzialità e dei propri limiti.
            </p>
          </div>
          <div className="intro-image">
            <img src="/images/psicomotricita-intro.jpg" alt="Psicomotricità" />
          </div>
        </div>
      </section>
      <section className="principles-section">
        <div className="principles-container">
          <h2>Principi fondamentali</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Unità corpo-mente</h3>
              <p>
                Riconosce l'inscindibile legame tra sviluppo motorio, cognitivo ed emotivo, 
                considerando la persona nella sua totalità.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3>Centralità della persona</h3>
              <p>
                Rispetta l'unicità di ciascun individuo, adattando l'intervento alle 
                specifiche caratteristiche e necessità.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Apprendimento attraverso l'esperienza</h3>
              <p>
                Promuove l'acquisizione di competenze attraverso l'esperienza diretta 
                e il movimento, non solo attraverso l'istruzione verbale.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Dimensione relazionale</h3>
              <p>
                Valorizza la relazione come elemento fondamentale per lo sviluppo e il 
                benessere, promuovendo capacità comunicative e sociali.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2>Benefici della psicomotricità</h2>
          
          <div className="age-group">
            <h3>Per i bambini</h3>
            <ul className="benefits-list">
              <li>Sviluppo di competenze motorie di base</li>
              <li>Miglioramento della coordinazione e dell'equilibrio</li>
              <li>Potenziamento dell'attenzione e della concentrazione</li>
              <li>Sviluppo della consapevolezza corporea e spaziale</li>
              <li>Espressione e regolazione delle emozioni</li>
              <li>Promozione dell'autonomia e dell'autostima</li>
              <li>Prevenzione di difficoltà di apprendimento</li>
              <li>Sviluppo di competenze sociali e relazionali</li>
            </ul>
          </div>
          
          <div className="age-group">
            <h3>Per gli adolescenti</h3>
            <ul className="benefits-list">
              <li>Accettazione dei cambiamenti corporei</li>
              <li>Gestione dello stress e dell'ansia</li>
              <li>Miglioramento dell'immagine corporea</li>
              <li>Potenziamento dell'autostima</li>
              <li>Sviluppo di competenze comunicative</li>
              <li>Gestione delle emozioni intense</li>
            </ul>
          </div>
          
          <div className="age-group">
            <h3>Per gli adulti</h3>
            <ul className="benefits-list">
              <li>Riduzione dello stress e delle tensioni</li>
              <li>Miglioramento della consapevolezza corporea</li>
              <li>Recupero del benessere psicofisico</li>
              <li>Potenziamento delle capacità espressive</li>
              <li>Miglioramento delle relazioni interpersonali</li>
              <li>Prevenzione di disturbi psicosomatici</li>
            </ul>
          </div>
          
          <div className="age-group">
            <h3>Per gli anziani</h3>
            <ul className="benefits-list">
              <li>Mantenimento delle capacità funzionali</li>
              <li>Prevenzione del declino cognitivo</li>
              <li>Miglioramento dell'equilibrio e prevenzione delle cadute</li>
              <li>Stimolazione della socializzazione</li>
              <li>Contrasto all'isolamento sociale</li>
              <li>Miglioramento del tono dell'umore</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="approaches-section">
        <div className="approaches-container">
          <h2>Approcci metodologici</h2>
          <p className="approaches-intro">
            La psicomotricità si avvale di diversi approcci metodologici, che possono essere 
            utilizzati in modo integrato in base alle esigenze specifiche:
          </p>
          
          <div className="approach-card">
            <h3>Psicomotricità funzionale</h3>
            <p>
              Focalizzata sullo sviluppo delle funzioni psicomotorie (coordinazione, equilibrio, 
              organizzazione spazio-temporale, ecc.), utilizza esercizi strutturati per potenziare 
              abilità specifiche. È particolarmente indicata per difficoltà motorie o disturbi 
              dell'apprendimento.
            </p>
          </div>
          
          <div className="approach-card">
            <h3>Psicomotricità relazionale</h3>
            <p>
              Centrata sulla dimensione emotiva e relazionale, valorizza il gioco spontaneo 
              come strumento di espressione e comunicazione. Attraverso materiali destrutturati 
              e la relazione con il psicomotricista, favorisce l'espressione di emozioni e 
              la costruzione di una positiva immagine di sé.
            </p>
          </div>
          
          <div className="approach-card">
            <h3>Integrazione sensoriale</h3>
            <p>
              Si concentra sull'elaborazione e l'integrazione degli stimoli sensoriali, aiutando 
              la persona a rispondere in modo adeguato agli input ambientali. Particolarmente 
              efficace per disturbi dell'elaborazione sensoriale e alcune condizioni neurodivergenti.
            </p>
          </div>
        </div>
      </section>

      <section className="science-section">
        <div className="science-container">
          <h2>Basi scientifiche</h2>
          <div className="science-content">
            <div className="science-text">
              <p>
                La psicomotricità affonda le sue radici in solide basi scientifiche, integrando 
                conoscenze provenienti da diverse discipline:
              </p>
              <ul>
                <li>
                  <strong>Neuroscienze:</strong> confermano la stretta connessione tra movimento 
                  e funzioni cognitive, evidenziando come l'attività motoria influenzi lo sviluppo 
                  cerebrale e l'apprendimento
              </li>
              <li>
                  <strong>Psicologia dello sviluppo:</strong> fornisce il quadro teorico sulle 
                  tappe evolutive e sull'importanza dell'esperienza corporea nello sviluppo 
                  cognitivo, emotivo e sociale
                </li>
                <li>
                  <strong>Scienze motorie:</strong> contribuiscono con conoscenze specifiche 
                  sul movimento umano, le capacità coordinative e gli aspetti biomeccanici
                </li>
                <li>
                  <strong>Pedagogia:</strong> offre principi e strategie educative che valorizzano 
                  il corpo come strumento di apprendimento e sviluppo integrale della persona
                </li>
              </ul>
              <p>
                Numerosi studi evidenziano l'efficacia della psicomotricità in diversi ambiti, 
                dalla prevenzione all'intervento in situazioni di difficoltà, confermando 
                i benefici di un approccio che integra corpo, mente ed emozioni.
              </p>
            </div>
            <div className="science-image">
              <img src="/images/science-basis.jpg" alt="Basi scientifiche" />
            </div>
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
          <h2>Scopri come la psicomotricità può aiutarti</h2>
          <p>
            Sei interessato a scoprire come la psicomotricità può contribuire al tuo benessere 
            o a quello dei tuoi cari? Contattami per una consulenza personalizzata.
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
