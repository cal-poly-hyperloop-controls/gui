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
          onClick={() => console.log('button clicked')}
          icon='chart'
          iconColor={Colors.white}
        />
      </div>
    </div>
  );
};

export default DockContainer;
