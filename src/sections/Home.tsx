import React from 'react';
import Section from "../components/Section";
import SectionDescription from '../components/SectionDescription';

const Home: React.FC = () => {
  return (
    <Section id="home" image="/assets/img/notebook.png">
      <figure id="section-green-circle"></figure>

      <div id="top-bar">
        <span id="logo">&lt;/&gt;</span>
        <i className="fas fa-bars" id="menu-bar-button" title="Open navigation menu"></i>
      </div>
      <div className="row overlay-row flex-fill">
        <div className="col-12 col-sm-6">
          <div className="section-side-div">
            <div className="d-flex flex-fill align-items-center">
              <SectionDescription
                title="Luan Ribeiro"
              >
                <p>
                  Fullstack web developer, Computer Technician.
                </p>
                <p>
                  <div className="personal-info-div">
                    <div className="info">
                      <span className="bold-text">AGE:</span>
                      <span className="info-text">21</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">Email:</span>
                      <a href="mailto:contact@luan-dev.com">
                        <span className="info-text">contact@luan-dev.com</span>
                      </a>
                    </div>
                    <div className="info">
                      <span className="bold-text">LOCATION:</span>
                      <span className="info-text">Brasil - São Paulo</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">EXPERIENCE:</span>
                      <span className="info-text">Mid-level +4 years</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">WORKING HOURS:</span>
                      <span className="info-text">Fulltime - 08:00 am - 06:00 pm (EDT)</span>
                    </div>
                  </div>
                </p>
              </SectionDescription>
            </div>

            <span className="mt-3" id="section-rights">Luan Dev - All Rights Reserved</span>
          </div>
        </div>
        <div className="col-12 col-sm-6 section-side-div position-relative" id="self-div">
          <img id="self-image" src="/assets/img/self2.jpg" alt="Me"/>
          <figure className="white-balls-pattern" id="pattern-ball-1"></figure>
          <figure className="white-balls-pattern" id="pattern-ball-2"></figure>
        </div>
      </div>
    </Section>
  );
};

export default Home;
