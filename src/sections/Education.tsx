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
      <h3>Education</h3>
      <Box
        title="GUAIANAZES STATE TECHNICAL SCHOOL"
        year="2017 - 2018"
        description={(<p>Technical Course in Informatics / Software Development</p>)}
      />

      <h3 className="mt-3">Experience</h3>
      <Box
        title="WORKANA - WEB DEVELOPER FULLSTACK"
        year="2019 - 2020"
        description={(
          <React.Fragment>
            <p>
              Workana is a brazilian freelancer platform.
            </p>
            <p>
              In the platform I had great experience and opportunities with web development,
            </p>
            <p>
              I finished a few small projects and I had the opportunity to work with PHP,
              Wordpress, payment gateways and Laravel.
            </p>
          </React.Fragment>
        )}
      />
      <Box
        title="LIMPEZA COM ZELO"
        year="2020"
        description={(
          <React.Fragment>
            <p>
              Limpeza com Zelo is a private company in Brazil that hired me to develop a 
              web ERP Software in PHP for management and automation the routines of a 
              cleaning service provider.
            </p>
          </React.Fragment>
        )}
      />
      <Box
        title="Web Development Agency"
        year="2020 - 2022"
        description={(
          <React.Fragment>
            <p>
              During 2 years I worked as fullstack to a web development agency.
            </p>
            <p>
              I got 3 long/mid term projects and I had the opportunity 
              to work with Laravel, Django, ReactJS, Node, API and MySQL, I had a 
              great experience as a developer there.
            </p>
          </React.Fragment>
        )}
      />
    </Section>
  );
};

export default Education;
