import React from 'react';
import './index.css';

//Import Local Files
//...

//Import Components
import DataView from '../../views/DataView/';

/**
 * Contains all the views displaying pod data
 */
const DataContainer = () => {
  return (
    <div className='DataContainer'>
      <DataView />
    </div>
  );
};

export default DataContainer;
