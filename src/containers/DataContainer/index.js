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
      <div id='systemButton'>
        <Button />
      </div>
      <div id='batteryCellButton'>
        <Button />
      </div>
    </div>
  );
};

export default DataContainer;
