import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
import DataView from '../../views/DataView/';
import Button from '../../components/Button/index';

/**
 * Contains all the views displaying pod data
 */
const DataContainer = () => {
  return (
    <div className='DataContainer'>
      <DataView />
      <div class='systemButton'>
        <Button title='SYSTEMS' onClick={()=>console.log('system button clicked')}/>
      </div>
      <div class='batteryCellContainer'>
        <Button title='BATTERY CELLS' onClick={()=>console.log('battery cell button clicked')} className='batteryButton'/>
      </div>
    </div>
  );
};

export default DataContainer;
