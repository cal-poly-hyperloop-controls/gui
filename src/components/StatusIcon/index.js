import React from 'react';
import './index.scss';

//Import Local Files
import Colors from "../../constants/Colors";

//Import Components
import Icon from '../../assets/Icon';

/**
 * Contains all the views displaying pod data
 * @param {bool} prop.health - if health is true then show green checkmark else red x
 * @param {String} prop.iconColor - color to give icon
 * @return {JSX.Element}
 */
const StatusIcon = props => {
  let iconName = "Xmark"
  let statusColor = Colors.red
  if(props.health){
    iconName = "Checkmark"
    statusColor = Colors.green
  }
  return (
    <div className='StatusIcon' style={{background:statusColor}}>
        <Icon className='Status' name={iconName} fill={props.iconColor}/>
    </div>
  )
};

export default StatusIcon;