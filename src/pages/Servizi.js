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

      <section className="services-intro">
        <div className="intro-container">
          <p>
            Offro una gamma completa di servizi nell'ambito della psicomotricità, adattati 
            alle specifiche esigenze di ciascuna persona e fascia d'età. Ogni percorso 
            inizia con una valutazione approfondita e si sviluppa attraverso un programma 
            personalizzato, costantemente monitorato e aggiornato.
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <div className="service-content">
            <h2>Valutazione psicomotoria</h2>
            <p>
              La valutazione psicomotoria è il punto di partenza per qualsiasi percorso. 
              Attraverso l'osservazione strutturata e l'utilizzo di strumenti specifici, 
              analizzo le competenze motorie, cognitive e relazionali della persona, identificando 
              punti di forza e aree di miglioramento.
            </p>
            <p>
              Al termine della valutazione, condivido con la persona e/o la famiglia un 
              report dettagliato e propongo un eventuale percorso personalizzato.
            </p>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Bambini, adolescenti, adulti e anziani</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>2-3 incontri di 60 minuti ciascuno</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-child"></i>
          </div>
          <div className="service-content">
            <h2>Psicomotricità per bambini</h2>
            <p>
              Percorsi dedicati ai bambini dai 2 ai 12 anni, volti a favorire uno sviluppo 
              armonico e integrato. Attraverso il gioco e attività strutturate, il bambino 
              migliora le competenze motorie, cognitive, emotive e relazionali.
            </p>
            <p>
              Le sessioni possono essere individuali o di piccolo gruppo, in base alle 
              esigenze specifiche. Particolare attenzione viene data a:
            </p>
            <ul>
              <li>Sviluppo delle competenze motorie di base</li>
              <li>Potenziamento dell'attenzione e della concentrazione</li>
              <li>Miglioramento della coordinazione e dell'equilibrio</li>
              <li>Sviluppo della consapevolezza corporea e spaziale</li>
              <li>Espressione e regolazione delle emozioni</li>
              <li>Promozione dell'autonomia e dell'autostima</li>
            </ul>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Bambini dai 2 ai 12 anni</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>Sessioni di 45-60 minuti, percorsi personalizzati</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="service-content">
            <h2>Attività di gruppo</h2>
            <p>
              Le attività di gruppo rappresentano un'opportunità preziosa per sviluppare 
              competenze sociali e relazionali, imparando a condividere spazi e materiali, 
              rispettare regole e collaborare con gli altri.
            </p>
            <p>
              I gruppi sono organizzati per fasce d'età omogenee e prevedono:
            </p>
            <ul>
              <li>Giochi cooperativi e di socializzazione</li>
              <li>Attività di espressione corporea e comunicazione non verbale</li>
              <li>Percorsi motori e giochi di coordinazione</li>
              <li>Esperienze sensoriali e creative</li>
              <li>Momenti di rilassamento e consapevolezza corporea</li>
            </ul>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Bambini, adolescenti e adulti (gruppi per fasce d'età)</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>Sessioni di 60-90 minuti, cicli trimestrali</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
          <div className="service-content">
            <h2>Supporto per adolescenti</h2>
            <p>
              L'adolescenza è una fase di profondi cambiamenti, in cui il corpo si trasforma 
              e l'identità si ridefinisce. I percorsi dedicati agli adolescenti offrono uno 
              spazio protetto per esplorare questi cambiamenti e sviluppare una positiva 
              relazione con il proprio corpo.
            </p>
            <p>
              Le attività proposte includono:
            </p>
            <ul>
              <li>Esperienze di espressione corporea e movimento creativo</li>
              <li>Tecniche di rilassamento e gestione dello stress</li>
              <li>Attività per migliorare l'immagine corporea e l'autostima</li>
              <li>Esercizi di consapevolezza e mindfulness</li>
              <li>Percorsi per sviluppare strategie di autoregolazione emotiva</li>
            </ul>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Adolescenti dai 13 ai 18 anni</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>Sessioni di 60 minuti, percorsi personalizzati</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-balance-scale"></i>
          </div>
          <div className="service-content">
            <h2>Psicomotricità per adulti</h2>
            <p>
              La psicomotricità per adulti si concentra sul recupero del benessere psicofisico, 
              sulla riduzione dello stress e sul miglioramento della consapevolezza corporea. 
              È particolarmente indicata per chi vive situazioni di tensione, affaticamento o 
              difficoltà legate all'immagine corporea.
            </p>
            <p>
              I percorsi per adulti includono:
            </p>
            <ul>
              <li>Tecniche di rilassamento e gestione dello stress</li>
              <li>Esercizi di respirazione consapevole</li>
              <li>Attività di espressione corporea</li>
              <li>Percorsi di mindfulness e consapevolezza corporea</li>
              <li>Strategie per migliorare la postura e prevenire tensioni muscolari</li>
            </ul>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Adulti di ogni età</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>Sessioni di 60-90 minuti, percorsi personalizzati</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-hands-helping"></i>
          </div>
          <div className="service-content">
            <h2>Consulenza per genitori ed educatori</h2>
            <p>
              Offro supporto e orientamento a genitori, insegnanti ed educatori che desiderano 
              comprendere meglio lo sviluppo psicomotorio e le sue implicazioni nell'apprendimento 
              e nel comportamento.
            </p>
            <p>
              Le consulenze possono riguardare:
            </p>
            <ul>
              <li>Interpretazione di comportamenti e difficoltà specifiche</li>
              <li>Strategie per sostenere lo sviluppo psicomotorio</li>
              <li>Consigli su attività e giochi da proporre a casa o a scuola</li>
              <li>Indicazioni su come strutturare ambienti favorevoli allo sviluppo</li>
              <li>Supporto nell'individuazione precoce di eventuali difficoltà</li>
            </ul>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Genitori, insegnanti, educatori e operatori del settore</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>Incontri di 60 minuti, numero variabile in base alle esigenze</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="service-content">
            <h2>Laboratori nelle scuole</h2>
            <p>
              Propongo laboratori di psicomotricità nelle scuole dell'infanzia e primarie, 
              con l'obiettivo di favorire lo sviluppo armonico dei bambini e sostenere gli 
              apprendimenti scolastici.
            </p>
            <p>
              I laboratori sono progettati in collaborazione con gli insegnanti e possono 
              concentrarsi su diversi obiettivi:
            </p>
            <ul>
              <li>Sviluppo delle abilità motorie di base</li>
              <li>Potenziamento della coordinazione e dell'orientamento spazio-temporale</li>
              <li>Miglioramento dell'attenzione e della concentrazione</li>
              <li>Sviluppo di un positivo clima relazionale in classe</li>
              <li>Prevenzione di difficoltà di apprendimento</li>
            </ul>
            <div className="service-details">
              <div className="detail-item">
                <h3>Per chi</h3>
                <p>Scuole dell'infanzia e primarie</p>
              </div>
              <div className="detail-item">
                <h3>Durata</h3>
                <p>Progetti personalizzati, da concordare con la scuola</p>
              </div>
            </div>
            <Link to="/contatti" className="btn-secondary">
              Richiedi informazioni
            </Link>
          </div>
        </div>
      </section>

      <section className="additional-info">
        <div className="info-container">
          <h2>Informazioni utili</h2>
          
          <div className="info-card">
            <h3><i className="fas fa-map-marker-alt"></i> Dove</h3>
            <p>
              Le attività si svolgono presso il mio studio in Via              Le attività si svolgono presso il mio studio in Via Esempio 123, Città, 
              in uno spazio appositamente attrezzato per la psicomotricità. 
              Su richiesta, è possibile organizzare interventi a domicilio o presso strutture 
              educative e scolastiche.
            </p>
          </div>
          
          <div className="info-card">
            <h3><i className="fas fa-euro-sign"></i> Costi</h3>
            <p>
              I costi variano in base alla tipologia di servizio e alla durata del percorso. 
              Contattami per un preventivo personalizzato in base alle tue esigenze specifiche. 
              È possibile concordare pacchetti di sedute a tariffa agevolata.
            </p>
          </div>
          
          <div className="info-card">
            <h3><i className="fas fa-file-medical"></i> Convenzionamenti</h3>
            <p>
              Lo studio è convenzionato con alcune associazioni e enti. Verifica se la tua 
              assicurazione o ente di assistenza copre le prestazioni di psicomotricità.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Hai bisogno di ulteriori informazioni?</h2>
          <p>
            Contattami per una consulenza gratuita di 15 minuti. Insieme valuteremo le tue 
            esigenze e individueremo il percorso più adatto a te o ai tuoi cari.
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
