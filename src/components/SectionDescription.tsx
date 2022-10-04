import React from 'react';

const SectionDescription: React.FC<{title: string, id?: string, children?: JSX.Element | JSX.Element[]}> = ({title, id, children}) => {
  return (
    <div className="section-description" id={id}>
      <h1> {title} <figure className="green-square" /></h1>
      <div>
        {children}
      </div>
    </div>
  );
};

export default SectionDescription;
