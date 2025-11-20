import React from 'react';
	
const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Bienvenue sur </h1>
          <h2><span>STYLE&TECH</span></h2>
          <p>
          Votre écosystème technologique, maîtrisé. Réseau, Sécurité, Téléphonie & Web.
          </p>
          {/* <div className="hero-buttons">
            <button className="btn btn-primary">Découvrir</button>
            <button className="btn btn-secondary">Nous contacter</button>
          </div> */}
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
          <img src="../../images/Photo_1760559351174.png.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
