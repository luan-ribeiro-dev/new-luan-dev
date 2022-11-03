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
                  Fullstack Web Developer, Computer Technician.
                </p>
                <div>
                  <div id="personal-info-div">
                    <div className="info">
                      <span className="bold-text">AGE:&nbsp;</span>
                      <span className="info-text">21</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">Email:&nbsp;</span>
                      <a href="mailto:contact@luanribeirosilva.com">
                        <span className="info-text">contact@luanribeirosilva.com</span>
                      </a>
                    </div>
                    <div className="info">
                      <span className="bold-text">LOCATION:&nbsp;</span>
                      <span className="info-text">Brasil - São Paulo</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">EXPERIENCE:&nbsp;</span>
                      <span className="info-text">Mid-level +4 years</span>
                    </div>
                    <div className="info">
                      <span className="bold-text">WORKING HOURS:&nbsp;</span>
                      <span className="info-text">Fulltime - <span className="white-space-nowrap">9:00 am</span> - <span className="white-space-nowrap">05:00 pm</span> (EDT)</span>
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
