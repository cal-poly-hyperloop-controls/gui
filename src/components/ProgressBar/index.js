import React from 'react';
import './index.scss';

//Import Local Files
import Colors from '../../constants/Colors';

//Import Components
import CountUp from 'react-countup';

/**
 * Contains all the views displaying pod data
 * @param {String} props.title - title of bar [OPTIONAL]
 * @param {Number} props.value - value of the bar (used in progress calculations)
 * @param {String} props.unit - Unit of measurment
 * @param {Number} props.min -  minimum value of data (show bar in red if value is below this value)
 * @param {Number} props.max - maximum value of data (show bar in red if value is greater than this value)
 * @param {Number} props.decimals - how many decimal points to display
 */
const ProgressBar = props => {
  const range = props.max - props.min;
  const { innerWidth: width, innerHeight: height } = window;
  let percent = (100 * (props.value - props.min)) / range;
  let color = Colors.blue;
  if (percent < 0) {
    color = Colors.red;
  }
  if (percent < 4) {
    percent = 4; //reason why 4 is used is to show a little of the bar and not completely hide the bar
  } else if (percent > 100) {
    percent = 100;
    color = Colors.red;
  }

  var percentDecimal = percent/100;
  var translateRight = percent/100 * 10;

  return (
    <div className='ProgressBar'>
      <div className='barContainer'>
        {props.title && <span className='title'>{props.title}</span>}
        <div className='base'>
          <div style={{ background: color }} class='left'></div>
          <div
            style={{
              background: color,
              transform: `scaleX(${percentDecimal})`,
            }}
            class='center'></div>
          <div
            style={{
              background: color,
              transform: `translateX(${translateRight}vw)`,
            }}
            class='right'></div>
        </div>
        <span className='min'>{props.min}</span>
        <span className='max'>{props.max}</span>
      </div>
      <span className='value'>
        <CountUp end={props.value} duration={1} decimals={props.decimals} />{' '}
        {props.unit}
      </span>
    </div>
  );
};

export default ProgressBar;
