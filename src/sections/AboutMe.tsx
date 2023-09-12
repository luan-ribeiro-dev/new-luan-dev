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
                    Olá! Sou Luan, <span className="green-text">Desenvolvedor Web Fullstack junior</span>. 
                    Eu tenho +4 anos de experiência com programação e sou <span className="green-text"> qualificado </span>
                    para desenvolver aplicações web em diversas linguagens de programação e frameworks.
                  </p>
                  <p>
                    Eu escrevo um <span className="green-text">código limpo</span>, tendendo
                    usar orientação a objeto, soluções simples e eficientes e a seguir o codebase do projeto.
                    Isso melhor a <span className="green-text">leitura</span> e reuso do meu código, o que torna uma 
                    vantagem para a manutenção do projeto quando se trabalha com um time de desenvolvedores.
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
