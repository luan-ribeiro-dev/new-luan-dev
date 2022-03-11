import React from "react";
import "./styles/styles.scss";
import Section from "./components/Section";

const App: React.FC = () => {
  return (
    <div className="app">
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 1</h1>
        <figure className="green-circle"></figure>

        <div className="row overlay-row h-100">
          <div id="top-bar">
            <i className="fas fa-code" id="logo"></i>
            <i className="fas fa-bars" id="menu-bar-button" title="Open navigation menu"></i>
          </div>
          <div className="col-12 col-sm-6 center-div">
            <div id="section-1-info-div">
              <h1>Fullstack Developer<figure className="green-square" /></h1>
              <p>
                Junior web developer with <span className="green-text">+3 years of programming</span> experience with companies and teams
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem at dui interdum <span className="green-text">suscipit</span> et sit amet tortor. */}
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

              <span className="mt-3">Luan Dev - All Rights Reserved</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 center-div position-relative" id="self-div">
            <img id="self-image" src="/assets/img/self2.jpg" alt="Me" />
            <figure className="white-balls-pattern" id="pattern-ball-1"></figure>
            <figure className="white-balls-pattern" id="pattern-ball-2"></figure>
          </div>
        </div>
      </Section>
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 2</h1>
      </Section>
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 3</h1>
      </Section>
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 4</h1>
      </Section>
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 5</h1>
      </Section>
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 6</h1>
      </Section>
      <Section>
        <h1 style={{position: "absolute", left: 0, top: 0}}>Section 7</h1>
      </Section>
    </div>
  );
};
export default App;
