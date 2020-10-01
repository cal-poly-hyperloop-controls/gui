import React from 'react';

//Import Local Files
import BackgroundImage from 'assets/Images/Background.png';

//Import Components
import DataContainer from 'containers/DataContainer';
import DockContainer from 'containers/DockContainer';

/**
 * Root component where all the data processing will happen
 */
const App = () => {
  return (
    <div style={styles.container}>
      <DataContainer />
      <DockContainer />
    </div>
  );
};

export default App;

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'contain',
    overflow: 'hidden',
  },
};
