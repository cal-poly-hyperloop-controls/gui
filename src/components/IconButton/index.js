import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
import Icon from '../../assets/Icon';

/**
 * Displays a button composed of an icon and text
 * @param {String} props.title - title to show on button
 * @param {Func} props.onClick - function to call on click
 * @param {String} props.icon - icon name to render
 * @param {String} props.iconColor - color to give icon
 * @return {JSX.Element}
 */
const IconButton = props => {
  return (
    <div className='IconButton' onClick={props.onClick}>
      <Icon className='Icon' name={props.icon} fill={props.iconColor} />
      <p>{props.title}</p>
    </div>
  );
};

export default IconButton;
