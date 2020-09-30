import React from 'react';
import './index.css';

//Import Local Files
//...

//Import Components
//...

/**
 * Component description
 * @param {String} props.title - component title
 * @param {Number} props.value - component value
 * @returns {JSX.Element} - Rendered component
 */
const TemplateName = props => {
  return (
    <div className='TemplateName'>
      <h1 className='title'>{props.title}</h1>
      <h5 className='value'>{props.value}</h5>
    </div>
  );
};

export default TemplateName;
