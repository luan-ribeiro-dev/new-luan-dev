import React from 'react';
import Section from "../components/Section";
import SectionDescription from '../components/SectionDescription';

const Home: React.FC = () => {
  return (
    <Section id="home" image="/assets/img/notebook.png">
      <figure id="section-green-circle"></figure>

      <div id="top-bar">
        <span id="logo">&lt;/&gt;</span>
      </div>
      <div className="row overlay-row flex-fill flex-column flex-sm-row">
        <div className="col-12 col-sm-6">
          <div className="section-side-div">
            <div className="d-flex flex-fill align-items-center">
              <SectionDescription
                title="Luan Ribeiro"
              >
                <p>
                Desenvolvedor Web Fullstack
                </p>
                <div>
                  <div id="personal-info-div">
                    <div className="info">
                      <span className="bold-text">Idade:&nbsp;</span>
                      <span className="info-text">22</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">Email:&nbsp;</span>
                      <a href="mailto:contact@luan-dev.com">
                        <span className="info-text">contact@luan-dev.com</span>
                      </a>
                    </div>
                    <div className="info">
                      <span className="bold-text">Localização:&nbsp;</span>
                      <span className="info-text">Brasil - São Paulo - São Miguel Paulista</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">Experiência:&nbsp;</span>
                      <span className="info-text">Desenvolvedor Web Fullstack Junior, +4 Anos</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">Github:&nbsp;</span>
                      <a href="https://github.com/luan-ribeiro-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <span className="info-text">github.com/luan-ribeiro-dev</span>
                      </a>
                    </div>
                    <div className="info">
                      <span className="bold-text">Linkedin:&nbsp;</span>
                      <a href="https://www.linkedin.com/in/luan-ribeiro-dev/" target="_blank" rel="noopener noreferrer">
                        <span className="info-text">linkedin.com/in/luan-ribeiro-dev/</span>
                      </a>
                    </div>
                    <div className="info mt-3">
                      <a href="/assets/pdf/CV_Desenvolvedor_Web_Fullstack_Luan_Ribeiro_Set_2023.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-submit">
                          Baixar Currículo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SectionDescription>
            </div>

            <span className="mt-3" id="luan-rights-reserved">Luan Dev - All Rights Reserved</span>
          </div>
        </div>
        <div className="col-12 col-sm-6 section-side-div position-relative flex-fill" id="self-div">
          <div id="self-image" style={{backgroundImage: "url('/assets/img/self2.jpg')"}}>
            <figure className="white-balls-pattern" id="pattern-ball-1"></figure>
            <figure className="white-balls-pattern" id="pattern-ball-2"></figure>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
