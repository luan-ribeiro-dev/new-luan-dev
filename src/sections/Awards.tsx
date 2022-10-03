import React from 'react';
import Section from "../components/Section";

const Awards: React.FC = () => {
  return (
    <Section id="awards" image="/assets/img/java.jpg">
      <h1>my<span className="green-text">awards</span><figure className="green-square" /></h1>
      <div className="image-wrapper">
        <div className="image" style={{backgroundImage: 'url("/assets/img/premiação-oracle.jpg")'}} />
        <div className="description">
          <span className="title">Oracle Corporation Awards</span>
          <p>
            State Technical School, National <span className="green-text">Programming Marathon</span><br/>
            <span className="green-text">1st Place</span> Winner (2017)
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Awards;
