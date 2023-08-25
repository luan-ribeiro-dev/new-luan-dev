import React from 'react';
import Section from "../components/Section";

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
    </Section>
  );
};

export default Education;
