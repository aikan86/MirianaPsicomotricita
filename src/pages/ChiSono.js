import React from 'react';
import '../styles/ChiSono.css';

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
            <img src="/images/miriana-profile-full.jpg" alt="Miriana Ferro" />
          </div>
          <div className="profile-bio">
            <h2>Miriana Ferro</h2>
            <h3>Specialista in Psicomotricità</h3>
            <p>
              Benvenuti nella mia pagina personale! Sono Miriana Ferro, una professionista 
              appassionata nel campo della psicomotricità con oltre 10 anni di esperienza nel 
              supportare persone di tutte le età nel loro percorso di sviluppo e benessere.
            </p>
            <p>
              Il mio percorso professionale è nato dalla profonda convinzione che il corpo e la 
              mente siano inseparabilmente connessi, e che attraverso il movimento possiamo 
              esprimere e migliorare il nostro benessere complessivo.
            </p>
            <div className="profile-quote">
              <blockquote>
                "Credo che ogni persona abbia un potenziale unico che può essere sviluppato 
                attraverso l'ascolto del proprio corpo e il movimento consapevole."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="background-section">
        <div className="background-container">
          <h2>Il mio percorso</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Formazione accademica</h3>
                <p className="timeline-date">2008-2011</p>
                <p>
                  Ho conseguito la laurea in Scienze Motorie presso l'Università di [Nome Università], 
                  dove ho iniziato ad appassionarmi allo studio del movimento umano e delle sue 
                  implicazioni psicologiche.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Specializzazione in Psicomotricità</h3>
                <p className="timeline-date">2011-2013</p>
                <p>
                  Mi sono specializzata in Psicomotricità presso [Istituto/Scuola], acquisendo 
                  competenze specifiche nei metodi di intervento psicomotorio per diverse fasce d'età.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Esperienza professionale</h3>
                <p className="timeline-date">2013-2017</p>
                <p>
                  Ho collaborato con diversi centri educativi e riabilitativi, sviluppando 
                  protocolli di intervento personalizzati per bambini con difficoltà di sviluppo 
                  e apprendimento.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Formazione continua</h3>
                <p className="timeline-date">2017-presente</p>
                <p>
                  Continuo ad aggiornarmi attraverso corsi di specializzazione e workshop 
                  internazionali, ampliando le mie competenze in aree come la psicomotricità 
                  relazionale e l'integrazione sensoriale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2>La mia filosofia professionale</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <p>
                Il mio approccio alla psicomotricità si basa sul rispetto profondo dell'unicità 
                di ogni persona e del suo ritmo di sviluppo. Credo fermamente che ognuno possieda 
                risorse interiori che, se opportunamente stimolate e valorizzate, possono portare 
                a un miglioramento significativo della qualità della vita.
              </p>
              <p>
                Lavoro con un approccio integrato che combina diverse metodologie, adattandole 
                alle esigenze specifiche di ciascun individuo. Il mio obiettivo è creare un ambiente 
                sicuro e accogliente dove ciascuno possa esprimersi liberamente attraverso il movimento, 
                scoprendo nuove possibilità e superando eventuali difficoltà.
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

      <section className="certifications-section">
        <div className="certifications-container">
          <h2>Certificazioni e affiliazioni</h2>
          <ul className="certifications-list">
            <li>Laurea in Scienze Motorie - Università di [Nome]</li>
            <li>Specializzazione in Psicomotricità - [Istituto]</li>
            <li>Certificazione in Integrazione Sensoriale</li>
            <li>Membro dell'Associazione Italiana di Psicomotricità</li>
            <li>Formazione avanzata in Psicomotricità Relazionale</li>
            <li>Certificazione in Tecniche di Rilassamento per l'Età Evolutiva</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ChiSono;
