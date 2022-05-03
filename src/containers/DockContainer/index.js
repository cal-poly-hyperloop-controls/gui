import React, { useState } from 'react';
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
import Chart from '../../components/Chart';
import Info from '../../components/Info';

/**
 * Contains all the views displaying pod data
 */
const DockContainer = () => {
  const [openMenu, setOpenMenu] = useState("");
  
  return (
    <div className={openMenu !== '' ? 'DockContainer open' : 'DockContainer'}>
      <div className='trapezoid' />
      <div className='buttonsContainer'>
        <IconButton
          title='Chart'
          onClick={() => setOpenMenu(openMenu !== '' ?  "": "Chart")}
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
          onClick={() => setOpenMenu(openMenu !== "" ? "":"Info")}
          icon='Info'
          iconColor={Colors.white}
        />
      </div>

      <OpenMenu name={openMenu}/>
    </div>
  );
};

const shouldChangeOpen = (openMenu, prev, name) => {
  const closed = (openMenu !== '' );
  
}

const OpenMenu = (props) => {

  const displayName = props.name;
  
  if (displayName === "Chart"){
    return(
      <Chart />
    );
  }else if (displayName === "Info"){
    return(
      <Info />
    );
  }
  return(
    <div name = "dummy" />
  )

}

export default DockContainer;