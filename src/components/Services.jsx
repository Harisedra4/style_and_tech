import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Développement Web',
      description: 'Création de sites web modernes et responsives avec les dernières technologies.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Installation et maintenance',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi ipsa rem, iure blanditiis recusandae ipsum.',
      icon: '📶'
    },
    {
      id: 3,
      title: 'materiel',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi ipsa rem, iure blanditiis recusandae ipsum.',
      icon: '💾'
    },
    {
      id: 4,
      title: 'securité',
      description: 'Support technique et maintenance continue de vos applications.',
      icon: '🛡️'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nos Services</h2>
          <p>Découvrez comment nous pouvons vous aider à réussir</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
