import React from 'react';

const Section: React.FC = (props) => {
  return (
    <div className="section">
        {props.children}
    </div>
  );
};

export default Section;
