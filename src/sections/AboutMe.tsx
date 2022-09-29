import React from 'react';
import Section from "../components/Section";

const AboutMe: React.FC = () => {
  return (
    <Section id="about-me">
      <h1 style={{ position: "absolute", left: 0, top: 0 }}>About Me</h1>

      <div className="row overlay-row h-100">
        <div className="col-12 col-sm-6 section-side-div">
          <div className="section-info-div">
            <h1>About me<figure className="green-square" /></h1>
            <p>
              Hello I am Luan, <span className="green-text">Junior Fullstack Web Developer</span>. 
              I have +3 years of experience with programming and I am qualified 
              to develop web applications, in your concept,
              ideas and demands.
            </p>
            <p>
              I already developed web applications by my self, 
              worked with teams and worked developing tools.
            </p>
            <p>
              I'm mostly proficient with backend work, 
              MVC frameworks like <span className="green-text">Laravel and Django</span>, 
              but I can handle frontend works too
            </p>
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

export default AboutMe;
