import React from 'react';

const SectionDescription: React.FC<{title: string, id?: string}> = ({title, children, id}) => {
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
