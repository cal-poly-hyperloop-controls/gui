import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
import Icon from '../../assets/Icon';

/**
 * Contains all the views displaying pod data
 * @param {String} props.title - title to show on button
 * @param {Func} props.onClick - function to call on click
 * @param {String} props.icon - icon name to render
 * @param {String} props.iconColor - color to give icon
 * @return {JSX.Element}
 */
const IconButton = props => {
  return (
    <div className='IconButton' onClick={() => console.log('button clicked')}>
      <Icon name='Checkmark' fill='red' />
      <p>{props.title}</p>
    </div>
  );
};

export default IconButton;
