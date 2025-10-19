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
            <h3>La mia filosofia</h3>
            <p>
              Mi occupo della cura dei bambini, della cura della relazione con e tra essi, della cura delle famiglie. 
              Mi piace dire che aiuto i bambini a fiorire e adesso vi spiego perché: Un bravo giardiniere assiste e crea le condizioni perché le sue piante fioriscano in salute: ha rispetto per il seme, <strong>sa che in esso sono contenute tutte le caratteristiche</strong> necessarie per crescere. 
              Se, però, da una parte, è vero che le piante crescono da sole, dall'altra, <strong>la cura e l'attenzione fanno la differenza</strong>. Si tratta di preparare adeguatamente il terreno perché questo venga fuori naturalmente ed in equilibrio. Ed è proprio quello che faccio con la psicomotricità.
            </p>
            <p>
              Credo che ogni bambino porti in sé risorse preziose.
              Il mio lavoro nasce dal desiderio di offrire uno spazio in cui possa sentirsi accolto, riconosciuto e libero di esprimersi.
              Attraverso la relazione, il gioco e il rispetto dei suoi tempi, favorisco una crescita armonica e autentica.
            </p>
            <div className="profile-quote">
              <blockquote>
                "da pensare spermegacitazione con i controcazzi"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* NUOVA SEZIONE CON I 3 RIQUADRI */}
      <section className="approach-cards-section">
        <div className="approach-container">
          <h2>I miei approcci</h2>
          <div className="cards-wrapper">
            <div className="approach-card card-educativa">
              <div className="card-icon">🌱</div>
              <h3>EDUCATIVA</h3>
              <p>
                Proprio come nella semina si prepara adeguatamente il terreno affinché i semini possano fiorire con il giusto supporto, 
                la psicomotricità offre ai bambini gli strumenti per crescere in modo sano e armonioso fornendo loro un ambiente sicuro e stimolante.
              </p>
            </div>

            <div className="approach-card card-relazionale">
              <div className="card-icon">🤝</div>
              <h3>RELAZIONALE</h3>
              <p>
                Cura e presenza: si concentra sulla creazione di un ambiente in cui i bambini possono stabilire relazioni positive con se stessi e gli altri. 
                Come il giardiniere che nutre e cura le piante, qui viene coltivato il senso di fiducia, il rispetto reciproco e la capacità di collaborare.
              </p>
            </div>

                        <div className="approach-card card-preventiva">
              <div className="card-icon">🛡️</div>
              <h3>PREVENTIVA</h3>
              <p>
                Per prevenire appunto, difficoltà future, come comportamenti problematici o sfide emotive, la psicomotricità offre supporto anzitempo ai bambini per superare ostacoli potenziali. 
                Proprio come il giardiniere che tutela le piante dalle intemperie. Questo aspetto enfatizza l'importanza di riconoscere i segnali precoci di difficoltà e intervenire prontamente per garantire una crescita sana.
              </p>
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
