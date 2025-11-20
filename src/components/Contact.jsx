import React, { useState } from 'react';

const Contact = () => {


  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactez-nous</h2>
          <p>Prêt à démarrer votre projet ? Parlons-en !</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Nos coordonnées</h3>
            <div className="contact-item">
              <strong>📧 Email:</strong>
              <span>rakoto@gmail.com</span>
            </div>
            <div className="contact-item">
              <strong>📞 Téléphone:</strong>
              <span>+261 34 82 448 29</span>
            </div>
            <div className="contact-item">
              <strong>📍 Adresse:</strong>
              <span>ambatondrazaka</span>
            </div>
          </div>
          <div>
            <img src="../../images/Photo_1760645278103.png.png" alt="" className='contact-image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
