import React from 'react';

const Section: React.FC<{id: string}> = ({id, children}) => {
  return (
    <section id={id} className="section">
        {children}
    </section>
  );
};

export default Section;
