import React from 'react';
import './index.scss';

//Import Local Files
import logoImage from '../../assets/Images/cphlogo.png';
import podImage from '../../assets/Images/pod.png';

//Import Components
import DistanceBar from '../../components/DistanceBar';
import Dial from '../../components/Dial';
import StateDisplay from '../../components/StateDisplay';
import ProgressBar from '../../components/ProgressBar';
import StatusBullet from '../../components/StatusBullet';
import StatusIcon from '../../components/StatusIcon';
import IconButton from '../../components/IconButton';

/**
 * Displays all the data components. Pretty much most of what you see in the GUI
 */
const DataView = () => {
  return (
    <div className='DataView'>
      <img className='logo' src={logoImage} alt='logo' />
      <img className='pod' src={podImage} alt='pod' />
      <DistanceBar />
      <Dial />
      <StateDisplay />
      <ProgressBar />
      <StatusBullet />
      <StatusIcon />
    </div>
  );
};

export default DataView;
