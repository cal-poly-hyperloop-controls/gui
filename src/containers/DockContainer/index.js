import React from 'react';
import './index.scss';

//Import Local Files
import Colors from '../../constants/Colors';
// import { ReactComponent as ChartIcon } from '../../assets/Icons/chart.svg';
// import ReportIcon from '../../assets/Icons/report.svg';
// import LaunchIcon from '../../assets/Icons/launch.svg';
// import StopIcon from '../../assets/Icons/stop.svg';
// import InfoIcon from '../../assets/Icons/info.svg';

//Import Components
import IconButton from '../../components/IconButton';

/**
 * Contains all the views displaying pod data
 */
const DockContainer = () => {
  return (
    <div className='DockContainer'>
      <div className='trapezoid' />
      <div className='buttonsContainer'>
        <IconButton
          title='Chart'
          onClick={() => console.log('Chart button clicked')}
          icon='Chart'
          iconColor={Colors.white}
        />
        <IconButton
          title='Generate Report'
          onClick={() => console.log('Generate Report button clicked')}
          icon='Report'
          iconColor={Colors.white}
        />
        <IconButton
          title='Launch'
          onClick={() => console.log('Launch button clicked')}
          icon='Launch'
          iconColor={Colors.white}
        />
        <IconButton
          title='Emergency Stop'
          onClick={() => console.log('Emergency Stop button clicked')}
          icon='Stop'
          iconColor={Colors.red}
        />
        <IconButton
          title='Info'
          onClick={() => console.log('Info button clicked')}
          icon='Info'
          iconColor={Colors.white}
        />
      </div>
    </div>
  );
};

export default DockContainer;
