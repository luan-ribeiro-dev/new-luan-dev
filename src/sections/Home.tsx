import React from 'react';
import Section from "../components/Section";

const Home: React.FC = () => {
  return (
    <Section id="home">
      <h1 style={{ position: "absolute", left: 0, top: 0 }}>Home</h1>
      <figure id="section-green-circle"></figure>

      <div className="row overlay-row h-100">
        <div id="top-bar">
          <span id="logo">&lt;/&gt;</span>
          <i className="fas fa-bars" id="menu-bar-button" title="Open navigation menu"></i>
        </div>
        <div className="col-12 col-sm-6 section-side-div">
          <div className="section-info-div">
            <h1>Luan Ribeiro<figure className="green-square" /></h1>
            <p>
              Fullstack web developer. <br />
            </p>
          </div>

          <div id="contact-info">
            <div>
              <a href="tel: +55 11 9 81389495" className="round-white-icon">
                <i className="fas fa-phone-alt"></i>
              </a>
              <a href="tel: +55 11 9 81389495">
                <span className="ms-2">+55 11 981389495</span>
              </a>
            </div>

            <div>
              <a href="mailto:contact@luan-dev.com" className="round-white-icon">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="mailto:contact@luan-dev.com">
                <span className="ms-2">contact@luan-dev.com</span>
              </a>
            </div>

            <span className="mt-3" id="section-rights">Luan Dev - All Rights Reserved</span>
          </div>
        </div>
        <div className="col-12 col-sm-6 section-side-div position-relative" id="self-div">
          <img id="self-image" src="/assets/img/self2.jpg" alt="Me" />
          <figure className="white-balls-pattern" id="pattern-ball-1"></figure>
          <figure className="white-balls-pattern" id="pattern-ball-2"></figure>
        </div>
      </div>
    </Section>
  );
};

export default Home;
