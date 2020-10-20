import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
//...

/**
 * Contains all the views displaying pod data
 * @param {String} props.title - state of the pod
 * @return {JSX.Element}
 */
const StateDisplay = (props) => {
  return (
    <div className='StateDisplay'>
      <p className='STATE'>
        STATE
      </p>
      <p className = 'title'>
        {props.title}
      </p>
    </div>
  )
};

export default StateDisplay;
