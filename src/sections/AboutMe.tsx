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
              <SectionDescription
                title="About Me"
              >
                <p>
                  Hello! I am Luan, <span className="green-text">Mid-level Fullstack Web Developer</span>. 
                  I have +4 years of experience with programming and I am <span className="green-text">qualified </span>
                  to develop web applications in diverse programming languages and frameworks.
                </p>
                <p>
                  I preffer to write a <span className="green-text">clean code</span>, tending
                  to use object orientation, abstract solutions and following the project codebase.
                  This improves the <span className="green-text">readability</span> and reuse of my code, which is an 
                  advantage for the project maintenance and when working with a team of developers.
                </p>
              </SectionDescription>
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
