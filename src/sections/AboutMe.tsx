import React from 'react';
import Section from "../components/Section";
import SectionDescription from '../components/SectionDescription';

const AboutMe: React.FC = () => {
  return (
    <Section id="about-me">
      <div className="row overlay-row flex-fill flex-sm-row">
        <div className="col-6 d-flex align-items-center">
          <div className="section-side-div">
            <div className="d-flex flex-fill align-items-center">
              <div className="section-description">
                <h1> sobre<span className="green-text">mim</span> <figure className="white-square" /></h1>
                <div>
                  <p>
                    Sou um desenvolvedor fullstack <span className="green-text">apaixonado por tecnologia</span> e pela criação de soluções eficientes e escaláveis. Há mais de <span className="green-text">6 anos</span>, atuo no desenvolvimento web, combinando <span className="green-text">criatividade</span> e <span className="green-text">expertise</span> técnica para transformar ideias em soluções digitais de <span className="green-text">alta qualidade</span>.
                  </p>
                  <p>
                    Minha especialização inclui as frameworks <span className="green-text">Laravel, Spring Boot, Django e ReactJS</span>, além de um domínio sólido em <span className="green-text">PHP, Java, Python, Javascript, Rust, MySQL, PostgreSQL, NodeJS, Redux, HTML, CSS e Sass</span>. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 section-side-div position-relative flex-fill" id="ide-div">
          <div id="ide-image" style={{backgroundImage: "url('/assets/img/ide.png')"}}>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
