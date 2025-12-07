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
              Favorire lo <strong>sviluppo armonico</strong> del bambino, sostenendolo ed accompagnandolo 
              durante il suo processo di crescita. 
              La psicomotricità valorizza i suoi <strong>punti di forza</strong> e lo sostiene nelle <strong>difficoltà</strong>, 
              attraverso il gioco e la relazione.
            </p>
            <p>Con uno sguardo <strong>attento e sensibile</strong>, la psicomotricista osserva il modo in cui ogni 
              bambino si muove, si esprime, entra in relazione e affronta le diverse situazioni di gioco.
              Questo permette di individuare <strong>risorse e fatiche</strong>, adattando le proposte alle esigenze del 
              singolo e del gruppo. 
              In questo modo ogni bambino può sentirsi <strong>accolto, sostenuto e libero di esprimersi</strong>, 
              trovando nel percorso uno spazio autentico di crescita.
             </p>
          </div>
          <div className="intro-image">
            <img src="/images/psicomotricita-intro.jpg" alt="Psicomotricità" />
          </div>
        </div>
      </section>

      {/* SEZIONE GRIGLIA */}
      <section className="principles-section">
        <div className="principles-container">
          <h2>Cosa offre al bambino</h2>
          
          <div className="principles-grid">
            
            <div className="principle-card">
              <div className="principle-icon"><i className="fas fa-brain"></i></div>
              <h3>Esplorare</h3>
              <p>
                I bambini possono sviluppare una maggiore consapevolezza di sè tramite l’esplorazione del <strong>corpo</strong>,
                la scoperta delle proprie <strong>emozioni</strong> e l’espressione dei propri <strong>bisogni</strong>.
                Il <strong>gioco</strong> e il <strong>movimento</strong> sono le vie privilegiate per farlo!
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon"><i className="fas fa-user"></i></div>
              <h3>Valorizzare</h3>
              <p>
                La psicomotricità attribuisce <strong>importanza ai punti di forza</strong> dei singoli bambini.
                In questo modo contribuisce a sviluppare una <strong>sana autostima</strong>: attraverso il successo nelle attività psicomotorie,
                i bambini sviluppano una maggiore fiducia in se stessi.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon"><i className="fas fa-hands"></i></div>
              <h3>Sostenere</h3>
              <p>
                Anche quando si affrontano sfide, la psicomotricità è un prezioso supporto.
                Attraverso situazioni di gioco, i bambini imparano a <strong>superare le difficoltà, scoprendo nuove soluzioni</strong>, spesso in modo creativo e strategico.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon"><i className="fas fa-heart"></i></div>
              <h3>Riconoscere</h3>
              <p>
                Qui, ogni emozione viene legittimata e riconosciuta al bambino.
                I bambini imparano che tutte le emozioni sono importanti e cominciano a sviluppare la capacità di riconoscerle.
                Questo contribuisce a <strong>facilitare l’abilità di affrontare e gestire in modo sano le proprie emozioni.</strong>
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon"><i className="fas fa-lightbulb"></i></div>
              <h3>Creare e Immaginare</h3>
              <p>
                Sperimentando con il movimento e il gioco e utilizzando materiali non strutturati, i bambini coltivano la loro creatività e immaginazione.
                <strong>Creano</strong> storie, <strong>costruiscono</strong> fortezze, <strong>affrontano</strong> draghi e <strong>danno vita a creazioni straordinarie</strong>.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon"><i className="fas fa-users"></i></div>
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
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2>Domande frequenti</h2>

          <div className="faq-item">
            <h3>La psicomotricità è solo per bambini con difficoltà o diagnosi?</h3>
            <p>
              <strong>No.</strong> È un’attività educativa e preventiva rivolta a <strong>tutti i bambini</strong>.
              È uno spazio per conoscersi meglio, crescere, esprimere le emozioni e 
              sviluppare una relazione positiva con sé stessi e con gli altri.
            </p>
          </div>

          <div className="faq-item">
            <h3>Come capire se la psicomotricità fa per mio figlio?</h3>
            <p>
              La psicomotricità è indicata per tutti i bambini, come spazio di crescita, gioco ed espressione.
              Può essere particolarmente utile se il bambino mostra difficoltà a gestire le emozioni, 
              fatica nelle relazioni, insicurezze, agitazione, blocchi o comportamenti intensi. 
              A volte i genitori sentono semplicemente che il loro bambino avrebbe bisogno di uno spazio 
              protetto in cui essere accolto, ascoltato e sostenuto: anche questo è un ottimo motivo per iniziare. 
              Un primo colloquio conoscitivo aiuta sempre a capire insieme se la psicomotricità è l’esperienza 
              giusta in quel momento del percorso del bambino.
            </p>
          </div>

          <div className="faq-item">
            <h3>A cosa servono gli incontri?</h3>
            <p>
              Gli incontri permettono di <strong>esprimere bisogni, emozioni, paure e desideri attraverso 
              il corpo e il gioco</strong>, in un ambiente che accoglie e sostiene.
              Aiutano a sviluppare maggiore conoscenza di sé, capacità di gestione delle emozioni, 
              tolleranza alla frustrazione e competenze relazionali.
              Creano un ambiente protetto per quei bambini che faticano a gestire emozioni intense, 
              manifestando blocchi o comportamenti esplosivi. 
              Qui trovano <strong>contenimento, sostegno e strumenti per affrontare le difficoltà.</strong>
            </p>
          </div>

          <div className="faq-item">
            <h3>Come si svolge una seduta di psicomotricità?</h3>
            <p>
             Gli incontri si svolgono in uno spazio accogliente, sicuro e ricco di materiali che 
             invitano al movimento e alla creatività. 
             Pur essendo ogni incontro diverso, la struttura resta costante per aiutare il bambino a 
             sentirsi contenuto e orientato. 
             Durante il percorso si lavorano temi come la percezione di sé e del corpo, la relazione 
             con lo spazio e il tempo, la capacità simbolica e la gestione delle emozioni.
            </p>
          </div>

          <div className="faq-item">
            <h3>I genitori sono coinvolti?</h3>
            <p>
              <strong>Sì</strong>.
              I genitori sono parte integrante del percorso: <strong>colloqui periodici</strong> permettono 
              di condividere osservazioni, evoluzioni e bisogni, così da creare una continuità tra la sala 
              di psicomotricità e la vita quotidiana.
              Se emerge la necessità, è possibile organizzare <strong>incontri genitore–bambino</strong>, 
              in cui si condivide l’esperienza di gioco e si rafforza la relazione.
            </p>
          </div>

          <div className="faq-item">
            <h3>La psicomotricità è ginnastica?</h3>
            <p>
             <strong>No.</strong>
            La psicomotricità non è ginnastica né educazione motoria: non mira alla performance 
            ma <strong>accoglie il corpo come mezzo di relazione, espressione e autoregolazione.</strong>
            </p>
          </div>

          <div className="faq-item">
            <h3>Qual è la differenza tra psicomotricità e neuropsicomotricità?</h3>
            <p>
             La <strong>psicomotricità è un’attività educativa e preventiva</strong>, che attraverso gioco, 
             movimento e relazione sostiene lo sviluppo del bambino. 
             Non è un intervento sanitario e si rivolge a tutti.
             La <strong>neuropsicomotricità,</strong> invece, <strong>è una professione sanitaria</strong>: il TNPEE si occupa della 
             valutazione e della riabilitazione di bambini con disturbi dello sviluppo.
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