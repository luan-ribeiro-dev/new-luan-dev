import React from 'react';
import Section from "../components/Section";

const FRAMEWORK_IMAGE_LIST = [
  "/assets/img/icons/laravel.png",
  "/assets/img/icons/react.png",
  "/assets/img/icons/django.png",
]

const PROGRAMMING_IMAGE_LIST = [
  "/assets/img/icons/php.png",
  "/assets/img/icons/phyton.png",
  "/assets/img/icons/javascript.png",
  "/assets/img/icons/typescript.png",
  "/assets/img/icons/html.png",
  "/assets/img/icons/css.png",
  "/assets/img/icons/sass.png",
  "/assets/img/icons/mysql.png",
]

const ProgressBar: React.FC<{description: string, porcent: number}> = ({description, porcent}) => (
  <div className="progress-bar-div">
    <div className="info">
      <span className="description">{description}</span>
    </div>
    <div className="empty-bar">
      <div className="color-bar" style={{width: `${porcent}%`}} />
    </div>
  </div>
)

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="row">
        <div className="col-12 col-sm-6">
          <h4>Programming Frameworks</h4>
          <div className="skill-flex">
            {FRAMEWORK_IMAGE_LIST.map((image, index) => (
              <div key={image+index} className="skill-box">
                <img src={image} />
              </div>
            ))}
          </div>
          
          <h4 className="mt-5">PROGRAMMING LANGUAGES</h4>
          <div className="skill-flex">
            <div  className="skill-box">
              <img src={"/assets/img/icons/php.png"} />
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/phyton.png"} />
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/javascript.png"} className="javascript" />
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/typescript.png"} className="typescript"/>
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/html.png"} />
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/css.png"} />
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/sass.png"} />
            </div>
            <div  className="skill-box">
              <img src={"/assets/img/icons/mysql.png"} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
          <h4>Expertise</h4>
          <div className="mt-3">
            <ProgressBar
              description="Laravel"
              porcent={80}
            />
            <ProgressBar
              description="Django"
              porcent={60}
            />
            <ProgressBar
              description="ReactJS"
              porcent={70}
            />
            <ProgressBar
              description="Backend"
              porcent={85}
            />
            <ProgressBar
              description="Frontend"
              porcent={60}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills