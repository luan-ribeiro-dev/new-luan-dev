import React from 'react';
import Section from "../components/Section";

const Awards: React.FC = () => {
  return (
    <Section id="awards" image="/assets/img/javascript.jpg">
      <h1>minha<span className="green-text">premiação</span><figure className="green-square" /></h1>
      <div className="image-wrapper">
        <div className="image" style={{backgroundImage: 'url("/assets/img/premiação-oracle.jpg")'}} />
        <div className="description">
          <span className="title">Oracle Corporation Awards</span>
          <p>
            Escola Tecnica Estadual - <span className="green-text">Maratona de programação</span><br/>
            Prêmio de <span className="green-text">1° Lugar</span> (2017)
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Awards;
