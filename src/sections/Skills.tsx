import React from 'react';
import Section from "../components/Section";

const FRAMEWORK_IMAGE_LIST = [
  {image: "/assets/img/icons/laravel.png", name: "Laravel"},
  {image: "/assets/img/icons/react.png", name: "ReactJS"},
  {image: "/assets/img/icons/django.png", name: "Django"},
]


const PROGRAMMING_IMAGE_LIST = [
  {image: "/assets/img/icons/php.png", name: "PHP"},
  {image: "/assets/img/icons/python.png", name: "Python"},
  {image: "/assets/img/icons/javascript.png", name: "Javascript"},
  {image: "/assets/img/icons/typescript.png", name: "Typescript"},
  {image: "/assets/img/icons/mysql.png", name: "MySQL"},
  {image: "/assets/img/icons/postgresql.png", name: "PostgreSQL"},
  {image: "/assets/img/icons/nodejs.png", name: "NodeJS"},
  {image: "/assets/img/icons/redux.png", name: "Redux"},
  {image: "/assets/img/icons/html.png", name: "HTML"},
  {image: "/assets/img/icons/css.png", name: "CSS"},
  {image: "/assets/img/icons/sass.png", name: "Sass"},
]

const OTHER_SKILLS_LIST = [
  {image: "/assets/img/icons/git.png", name: "Git"},
  {image: "/assets/img/icons/docker.png", name: "Docker"},
  {image: "/assets/img/icons/restfulapi.png", name: "RestfulAPI"},
  {image: "/assets/img/icons/mvc.png", name: "MVC"},
  {image: "/assets/img/icons/redis.png", name: "Redis"},
  {image: "/assets/img/icons/jquery.png", name: "Jquery"},
  {image: "/assets/img/icons/axios.png", name: "Axios"},
  {image: "/assets/img/icons/composer.png", name: "Composer"},
  {image: "/assets/img/icons/bootstrap.png", name: "Bootstrap"},
  {image: "/assets/img/icons/linux.png", name: "Linux"},
  {image: "/assets/img/icons/trello.png", name: "Trello"},
  {image: "/assets/img/icons/slack.png", name: "Slack"},
  {image: "/assets/img/icons/github.png", name: "Github"},
  {image: "/assets/img/icons/bitbucket.png", name: "Bitbucket"},
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
          <h4>Frameworks de Programação</h4>
          <div className="skill-flex">
            {FRAMEWORK_IMAGE_LIST.map((obj, index) => (
              <div key={obj.image+index} className="skill-box d-flex flex-column justify-content-center align-items-center">
                <img src={obj.image} />
                <span className="mt-2">{obj.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
          
      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <h4>Linguagens e Tecnologias de Programação</h4>
          <div className="skill-flex">
            {PROGRAMMING_IMAGE_LIST.map((obj, index) => (
              <div key={obj.image+index} className="skill-box d-flex flex-column justify-content-center align-items-center">
                <img src={obj.image} />
                <span className="mt-2">{obj.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <h4>Outras competências</h4>
          <div className="skill-flex">
            {OTHER_SKILLS_LIST.map((obj, index) => (
              <div key={obj.image+index} className="skill-box d-flex flex-column justify-content-center align-items-center">
                <img src={obj.image} />
                <span className="mt-2">{obj.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills