import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
//...

/**
*@param {String} props.title - title to show on button
*@param {Func} props.onClick - function to call on click
*@param {String} props.className - class name to use for styling (2 different classes for 2 different styles)
 */
const Button = props => {
  return(
    <div className={`Button ${props.className ? props.className : ''}`}
    onClick={props.onClick}>
      <>{props.title}</>
    </div>
  )
};

export default Button;
