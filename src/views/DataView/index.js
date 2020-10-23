import React, { useEffect, useState } from 'react';
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

/**
 * Displays all the data components. Pretty much most of what you see in the GUI
 */
const DataView = () => {
  const [val, setVal] = useState(21.5);

  useEffect(() => {
    //TEMPORARY: randomizes a value to demonstrate dial animations
    setTimeout(() => {
      setVal(Math.random(1) * 105);
    }, 2000);
  });

  return (
    <div className='DataView'>
      <img className='logo' src={logoImage} alt='logo' />
      <img className='pod' src={podImage} alt='pod' />
      <DistanceBar />
      <Dial
        title='POD SPEED'
        value={val}
        unit='M/S'
        min={0}
        max={100}
        size={400}
        threshold={0.15}
        errorThreshold={0.05}
      />
      <StateDisplay title='READY TO LAUNCH' />
      <ProgressBar />
      <StatusBullet />
      <StatusIcon />
    </div>
  );
};

export default DataView;
