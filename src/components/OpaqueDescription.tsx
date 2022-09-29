import React from 'react';

const SectionDescription: React.FC<{title: string}> = ({title, children}) => {
  return (
    <div className="section-description">
      <h1> {title} <figure className="green-square" /></h1>
      <div>
        {children}
      </div>
    </div>
  );
};

export default SectionDescription;
