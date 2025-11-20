import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Site E-commerce',
      description: 'Plateforme de vente en ligne avec paiement sécurisé.',
      image: '../../images/Photo_1760645325177.png.png',
      category: 'Web'
    },
    {
      id: 2,
      title: 'Camera',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi ipsa rem, iure blanditiis recusandae ipsum.',
      image: '../../images/nous-contacter-768x384.jpeg',
      category: 'reseau'
    },
    {
      id: 3,
      title: 'Installation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi ipsa rem, iure blanditiis recusandae ipsum.',
      image: '../../images/Photo_1759938196621.png.png',
      category: 'telephonie'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header header2">
          <h2>Nos Réalisations</h2>
          <p>Découvrez quelques-uns de nos projets récents</p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt="" className='image-product'/>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
