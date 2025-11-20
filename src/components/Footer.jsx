
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>STYLE AND TECH</h3>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi quae molestias voluptate possimus laboriosam dignissimos facilis mollitia temporibus nobis.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Réseaux sociaux</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">WhatsApp</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 style&tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
