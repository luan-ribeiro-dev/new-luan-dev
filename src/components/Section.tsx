import React from 'react';

const Section: React.FC<{id: string, image?:string, children: JSX.Element | JSX.Element[]}> = ({id, image, children}) => {
  if (image) {
    return (
      <section id={id} className="section" style={{backgroundImage: `url("${image}")`}}>
          {children}
      </section>
    );
  }
  return (
    <section id={id} className="section">
        {children}
    </section>
  );
};

export default Section;
