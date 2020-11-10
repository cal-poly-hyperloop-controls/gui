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
import Colors from '../../constants/Colors';

/**
 * Displays all the data components. Pretty much most of what you see in the GUI
 */
const DataView = () => {
  const [speed, setSpeed] = useState(0);
  const [acceleration, setAcceleration] = useState(0);
  const [maglev, setMaglev] = useState(0);
  const [FBPVoltage, setFBPVoltage] = useState(0);
  const [FBPCurrent, setFBPCurrent] = useState(0);

  useEffect(() => {
    //TEMPORARY: randomizes a value to demonstrate dial animations
    setTimeout(() => {
      setSpeed(Math.random(1) * 105);
      setAcceleration(Math.random(1) * 25);
      setMaglev(Math.random(1) * 15);
       //setFBPVoltage(Math.random(1) * 100);
      setFBPCurrent(Math.random(1) * 500);
    }, 2000);
  }, [acceleration]);

  return (
    <div className='DataView'>
      <img className='logo' src={logoImage} alt='logo' />
      <img className='pod' src={podImage} alt='pod' />
      <DistanceBar />
      <StatusBullet 
        title='ALL SYSTEMS CHECK'
        statusMessage='Safe'
        health={true}
      />
      <div className='centerDisplay'>
        <div className='centerDialContainer'>
          <Dial
            title='Acceleration'
            value={acceleration}
            unit='M/S²'
            min={0}
            max={20}
            size={200}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='accelDial'
            rotation={-45}
          />
          <Dial
            title='POD SPEED'
            value={speed}
            unit='M/S'
            min={0}
            max={100}
            size={400}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='speedDial'
          />
          <Dial
            title='MagLev Levitation'
            value={maglev}
            unit='MM'
            min={0}
            max={10}
            size={200}
            threshold={0.1}
            errorThreshold={0.05}
            customClass='maglevDial'
            rotation={45}
            mirror={true}
          />
        </div>
        <StateDisplay title='READY TO LAUNCH' />
      </div>

      <div className='FBPContainer'>
        <ProgressBar
          title='F.B.P. Voltage'
          value={FBPVoltage}
          unit='V'
          min={40}
          max={72}
          decimals={1}
        />
        <ProgressBar
          title='F.B.P. Current'
          value={FBPCurrent}
          unit='A'
          min={0}
          max={480}
          decimals={0}
        />
      </div>

      
      
    </div>
  );
};

export default DataView;
