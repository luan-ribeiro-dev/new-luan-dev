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
  {image: "/assets/img/icons/bootstrap.png", name: "Bootstrap"},
  {image: "/assets/img/icons/typescript.png", name: "Typescript"},
  {image: "/assets/img/icons/linux.png", name: "Linux"},
  {image: "/assets/img/icons/trello.png", name: "Trello"},
  {image: "/assets/img/icons/slack.png", name: "Slack"},
  {image: "/assets/img/icons/github.png", name: "Github"},
  {image: "/assets/img/icons/bitbucket.png", name: "Bitbucket"},
]

const Box: React.FC<{title:string, year:string, description:JSX.Element}> = ({title, year, description}) => {
  return (
    <div className="career-history-progress">
      <header>
        <h6>{title}</h6>
        <span>{year}</span>
      </header>
      <div className="description">
        {description}
      </div>
    </div>
  )
}

const Education: React.FC = () => {
  return (
    <Section id="education">
      <div className="row">
        <div className="col-12 col-sm-6">
          <h3>Educação</h3>
          <Box
            title="ETEC de Guaianazes"
            year="2017 - 2018"
            description={(<p>Desenvolvedor de software</p>)}
          />

          <h3 className="mt-3">Experiência</h3>
          <Box
            title="WORKANA - Plataforma para freelancers"
            year="2019 - 2020"
            description={(
              <React.Fragment>
                <p>
                  Workana é uma plataforma brasileira para freelancers.
                </p>
                <p>
                  Na plataforma eu tive ótimas experiências e oportunidades com desenvolvimento web,
                </p>
                <p>
                  Eu trabalhei com PHP, Wordpress, gateways de pagamento e Laravel.
                </p>
              </React.Fragment>
            )}
          />
          <Box
            title="LIMPEZA COM ZELO"
            year="2020 - 2021"
            description={(
              <React.Fragment>
                <p>
                  Limpeza com zelo é uma empresa privada que me contratou para desenvolver um
                  ERP Web em PHP para gerenciamento e automação das rotinas de uma empresa de limpeza.
                </p>
              </React.Fragment>
            )}
          />
          <Box
            title="Upwork"
            year="2021 - 2023"
            description={(
              <React.Fragment>
                <p>
                  Durante 2 anos eu trabalhei como fullstack para uma agência de desenvolvimento web.
                </p>
                <p>
                  Tive 3 trabalhos de médio/longo prazo e tive a oportunidade de trabalhar com 
                  Laravel, Django, ReactJS, Node, API e MySQL, tive uma ótima experiência com a equipe de desenvolvedores lá.
                </p>
              </React.Fragment>
            )}
          />

          <Box
            title="Pacaembu autopeças"
            year="2023 - Atualmente"
            description={(
              <React.Fragment>
                <p>
                  A <span className="green-text">Pacaembu Autopeças</span> é uma empresa pioneira no setor de autopeças pesadas, e tive o privilégio de contribuir para sua transformação digital. Como desenvolvedor, meu papel foi <span className="green-text">modernizar e automatizar</span> processos que antes estavam restritos a planilhas, criando um sistema web que permitisse <span className="green-text">interação fluida</span> entre a empresa com <span className="green-text">clientes e fornecedores</span>.
                </p>

                <p>
                  Além disso, <span className="green-text">inovei a comunicação interna</span> da empresa, substituindo o uso de e-mails por um sistema de chamados, o que permitiu uma resolução mais <span className="green-text">ágil</span> e <span className="green-text">eficiente</span> dos problemas entre os diferentes setores.
                </p>
              </React.Fragment>
            )}
          />
        </div>

        <div className="col-12 col-sm-6">
          <div className="col-12 mt-4 mt-sm-0">
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
          <div className="col-12 mt-4">
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
          <div className="col-12 mt-4">
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
      </div>
    </Section>
  );
};

export default Education;
