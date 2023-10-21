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
  const [solTemp, setSolTemp] = useState(0);
  const [tensPres, setTensPres] = useState(0);
  const [fTensTemp, setFTensTemp] = useState(0);
  const [tensATTemp, settensATTemp] = useState(0);
  const [rTensTemp, setRTensTemp] = useState(0);
  const [brakingATTemp, setBrakingATTemp] = useState(0);
  const [FBPHTemp, setFBPHTemp] = useState(0);
  const [FBPLTemp, setFBPLTemp] = useState(0);
  const [FBPATemp, setFBPATemp] = useState(0);
  const [FBPA2Temp, setFBPA2Temp] = useState(0);
  const [FBPA3Temp, setFBPA3Temp] = useState(0);
  const [FBPA4Temp, setFBPA4Temp] = useState(0);
  const { innerWidth: width, innerHeight: height } = window;


  const [FBPVoltage, setFBPVoltage] = useState(0);
  const [FBPCurrent, setFBPCurrent] = useState(0);
  const [FBPStateOfCharge, setFBPStateOfCharge] = useState(0);
  const [FBPIsolator, setFBPIsolator] = useState(0);
  const [FBPLowCell, setFBPLowCell] = useState(0);
  const [FBPHighCell, setFBPHighCell] = useState(0);

  const [RBPVoltage, setRBPVoltage] = useState(0);
  const [RBPCurrent, setRBPCurrent] = useState(0);
  const [RBPStateOfCharge, setRBPStateOfCharge] = useState(0);
  const [RBPIsolator, setRBPIsolator] = useState(0);
  const [RBPLowCell, setRBPLowCell] = useState(0);
  const [RBPHighCell, setRBPHighCell] = useState(0);

  const [ControlsBattery, setControlsBattery] = useState(0);



  useEffect(() => {
    //TEMPORARY: randomizes a value to demonstrate dial animations
    setTimeout(() => {
      setSpeed(Math.random(1) * 105);
      setAcceleration(Math.random(1) * 25);
      setMaglev(Math.random(1) * 15);
      setSolTemp((Math.random(1) * 50) - 20);
      setTensPres((Math.random(1) * 60) + 30);
      setFTensTemp((Math.random(1) * 65) + 15);
      settensATTemp((Math.random(1) * 100) - 20);
      setRTensTemp((Math.random(1) * 65) + 15);
      setBrakingATTemp((Math.random(1) * 100));
      setFBPHTemp((Math.random(1) * 120) - 20);
      setFBPLTemp((Math.random(1) * 120) - 20);
      setFBPATemp((Math.random(1) * 120) - 20);
      setFBPA2Temp((Math.random(1) * 120) - 20);
      setFBPA3Temp((Math.random(1) * 120) - 20);
      setFBPA4Temp((Math.random(1) * 120) - 20);

      setFBPVoltage(Math.random(1) * 32 + 40);
      setFBPCurrent(Math.random(1) * 490);
      setFBPStateOfCharge(Math.random(1) * 100);
      setFBPIsolator(Math.random(1) * 5);
      setFBPLowCell((Math.random(1) * 1.6) + 2);
      setFBPHighCell(Math.random(1) * 5);

      setRBPVoltage(Math.random(1) * 32 + 40);
      setRBPCurrent(Math.random(1) * 490);
      setRBPStateOfCharge(Math.random(1) * 100);
      setRBPIsolator(Math.random(1) * 5);
      setRBPLowCell((Math.random(1) * 1.6) + 2);
      setRBPHighCell(Math.random(1) * 5);
      setControlsBattery(Math.random(1) * 3 + 11);
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
            title = 'Tensioner Pressure'
            value = {tensPres}
            unit = 'PSI'
            min={30.1}
            max={90}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='tensPresDial'
          />
          <Dial
            title = 'Front Tensioner Temp'
            value = {fTensTemp}
            unit = '°C'
            min={15}
            max={80}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='fTensTempDial'
          />
          <Dial
            title = 'Tensioner Air Tank Temp'
            value = {tensATTemp}
            unit = '°C'
            min={-19.9}
            max={80}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='tensATTempDial'
          />
          <Dial
            title = 'Rear Tensioner Temp'
            value = {rTensTemp}
            unit = '°C'
            min={15}
            max={80}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='rTensTempDial'
          />
          <Dial
            title = 'Braking Air Tank Temp'
            value = {brakingATTemp}
            unit = '°C'
            min={-19.9}
            max={80}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='brakingATTempDial'
          />
          <Dial
            title = 'Solenoid Temp'
            value = {solTemp}
            unit = '°C'
            min={-19.9}
            max={30}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='solTempDial'
          />
          <Dial
            title='Acceleration'
            value={acceleration}
            unit='M/S²'
            min={0}
            max={20}
            size={width / 10}
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
            size={width / 5}
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
            size={width/10}
            threshold={0.1}
            errorThreshold={0.05}
            customClass='maglevDial'
            rotation={45}
            mirror={true}
          />
          <Dial
            title = 'F.B.P. High Temp'
            value = {FBPHTemp}
            unit = '°C'
            min={0}
            max={100}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='FBPHTempDial'
          />
          <Dial
            title = 'F.B.P. Low Temp'
            value = {FBPLTemp}
            unit = '°C'
            min={0}
            max={100}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='FBPLTempDial'
          />
          <Dial
            title = 'F.B.P. Average Temp'
            value = {FBPATemp}
            unit = '°C'
            min={0}
            max={100}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='FBPATempDial'
          />
          <Dial
            title = 'F.B.P. Average Temp'
            value = {FBPA2Temp}
            unit = '°C'
            min={0}
            max={100}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='FBPA2TempDial'
          />
          <Dial
            title = 'F.B.P. Average Temp'
            value = {FBPA3Temp}
            unit = '°C'
            min={0}
            max={100}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='FBPA3TempDial'
          />
          <Dial
            title = 'F.B.P. Average Temp'
            value = {FBPA4Temp}
            unit = '°C'
            min={0}
            max={100}
            size={width / 12.5}
            threshold={0.15}
            errorThreshold={0.05}
            customClass='FBPA4TempDial'
          />



        </div>
        <StateDisplay title='READY TO LAUNCH'/>

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
        <ProgressBar
          title='F.B.P. State Of Charge'
          value={FBPStateOfCharge}
          unit='%'
          min={0}
          max={100}
          decimals={0}
        />
        <ProgressBar
          title='F.B.P. Isolator'
          value={FBPIsolator}
          unit=''
          min={0}
          max={5}
          decimals={1}
        />
        <ProgressBar
          title='F.B.P. Low Cell'
          value={FBPLowCell}
          unit='V'
          min={2}
          max={3.6}
          decimals={1}
        />
        <ProgressBar
          title='F.B.P. High Cell'
          value={FBPHighCell}
          unit='V'
          min={0}
          max={5}
          decimals={1}
        />
      </div>

      <div className='RBPContainer'>
        <ProgressBar
          title='R.B.P. Voltage'
          value={RBPVoltage}
          unit='V'
          min={40}
          max={72}
          decimals={1}
        />
        <ProgressBar
          title='R.B.P. Current'
          value={RBPCurrent}
          unit='A'
          min={0}
          max={480}
          decimals={0}
        />
        <ProgressBar
          title='R.B.P. State Of Charge'
          value={RBPStateOfCharge}
          unit='%'
          min={0}
          max={100}
          decimals={0}
        />
        <ProgressBar
          title='R.B.P. Isolator'
          value={RBPIsolator}
          unit=''
          min={0}
          max={5}
          decimals={1}
        />
        <ProgressBar
          title='R.B.P. Low Cell'
          value={RBPLowCell}
          unit='V'
          min={2}
          max={3.6}
          decimals={1}
        />
        <ProgressBar
          title='R.B.P. High Cell'
          value={RBPHighCell}
          unit='V'
          min={0}
          max={5}
          decimals={1}
        />
      </div>

      <div className='ControlBattery'>
        <ProgressBar
          title='Control Battery'
          value={ControlsBattery}
          unit='V'
          min={11}
          max={14}
          decimals={1}
        />
      </div>

      
      
    </div>
  );
};

export default DataView;
