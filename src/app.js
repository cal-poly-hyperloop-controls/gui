import React from 'react';

//Import Local Files
import Colors from 'constants/Colors';
import BackgroundImage from 'assets/Images/Background.png';

//Import Components
import DataContainer from 'containers/DataContainer';

/**
 * Root component where all the data processing will happen
 */
const App = () => {
  return (
    <div style={styles.container}>
      <DataContainer />
    </div>
  );
};

export default App;

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    background: Colors.lightPurple,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'contain',
  },
};
