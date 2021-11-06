import React from 'react';
import './index.scss';

//Import Local Files
import Colors from "../../constants/Colors";

//Import Components
import StatusIcon from "../StatusIcon";

/**
 * Contains all the views displaying pod data
 * @param {String} props.title - title of the health status
 * @param {String} props.statusMessage - it will be a short message about the status (eg. Safe,Off,On,Active,Failure,etc.)
 * @param {bool} props.health - displays health indication (passed down to StatusIcon)
 * @return {JSX.Element}
 */
const StatusBullet = props => {
  return( 
    <div className='StatusBullet'>
      <StatusIcon
        health={props.health}
        iconColor={Colors.black}
      />
      <div className='dataContainer'>
        <p className='title'>{props.title} </p>
        <p className='statusMessage'>{props.statusMessage}</p>
      </div>
    </div>
  )
};

export default StatusBullet;
