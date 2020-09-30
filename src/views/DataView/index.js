import React from 'react';
import './index.css';

//Import Local Files
import logoImage from '../../assets/Images/cphlogo.png';
import podImage from '../../assets/Images/pod.png';

/**
 * Displays all the data components. Pretty much most of what you see in the GUI
 */
const DataView = () => {
  return (
    <div className='DataView'>
      <img className='logo' src={logoImage} alt='logo' />
      <img className='pod' src={podImage} alt='pod' />
    </div>
  );
};

export default DataView;
