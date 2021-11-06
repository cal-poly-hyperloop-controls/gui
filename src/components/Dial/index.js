import React, { useRef, useEffect } from 'react';
import './index.scss';

//Import Local Files
import Colors from '../../constants/Colors';

//Import Components
import CountUp from 'react-countup';

/**
 * Renders a dial that displays the data passed in
 * @param {String} props.title - title of dial
 * @param {Number} props.value - value of the dial (used in circular progress calculations)
 * @param {String} props.unit - Unit of measurment
 * @param {Number} props.min -  minimum value of data (show dial in red if value is below this value)
 * @param {Number} props.max - maximum value of data (show dial in red if value is greater than this value)
 * @param {Number} props.threshold - show dial in yellow if value is within this threshold percentage of the min/max values
 * @param {Number} props.errorThreshold - show dial in yellow if value is greather than min/max by this percentage (must be smaller than threshold)
 * @param {Number} props.size - scale the dial’s size by this value
 * @param {Number} props.rotation - value to rotate dial by in degrees [OPTIONAL]
 * @param {Boolean} props.mirror - if true, the dial will fill from right to left [OPTIONAL]
 * @param {String} props.customClass -  used to add custom styles to component
 * @return {JSX.Element}
 */
const Dial = props => {
  const base = useRef(null);
  const progress = useRef(null);
  const progressPoint = useRef(null);

  if (props.threshold <= props.errorThreshold) {
    throw Error(
      'ERROR: dial prop.errorThreshold must be smaller than props.threshold'
    );
  }

  const width = props.size;
  const strokeWidth = width / 50;
  const ratio = (width - strokeWidth) / 2;
  const range = props.max - props.min;
  const minMaxPadding = range * props.errorThreshold;

  let percent =
    (props.value + minMaxPadding - props.min) / (range + minMaxPadding * 2);
  if (percent < 0) {
    percent = 0;
  } else if (percent > 1) {
    percent = 1;
  }

  //The section below is used to make the necessary calculations to construct the thin line base of the dial
  //This value is used to construct the semiCircle shape displaying 285 degrees of the circumfrence
  const circleAngle = 285;
  const circumference = 2 * Math.PI * ratio;
  const strokeDashoffset =
    ((270 - (360 - circleAngle) / 2) / 360) * circumference;
  const strokeDasharray = (circleAngle / 360) * circumference;

  //Values to display yellow warnings at
  const warningMin = range * props.threshold + props.min;
  const warningMax = props.max - range * props.threshold;

  useEffect(() => {
    //Renders the base, progress bar, and tickmark at the end of the progress bar
    let color = Colors.blue;
    if (props.value < props.min || props.value > props.max) {
      color = Colors.red;
    } else if (props.value < warningMin || props.value > warningMax) {
      color = Colors.yellow;
    }

    //thin base properties
    base.current.style.width = '100%';
    base.current.style.height = '100%';
    base.current.style.fill = 'none';
    base.current.style.stroke = Colors.lightPurple;
    base.current.style.strokeLinecap = 'square';
    base.current.setAttribute('cx', ratio);
    base.current.setAttribute('cy', ratio);
    base.current.setAttribute('r', ratio);
    base.current.style.strokeDashoffset = strokeDashoffset;
    base.current.style.strokeDasharray = [
      strokeDasharray,
      circumference - strokeDasharray,
    ];
    base.current.style.strokeWidth = 0.25;
    base.current.style.transform = `translate(${strokeWidth / 2}px,${
      strokeWidth / 2
    }px)`;

    //progresspoint properties
    const newStrokeWidth = strokeWidth * 2;
    const newWidth = width - newStrokeWidth / 2;
    const newAnchor = width / 2 - (newWidth - newStrokeWidth) / 2;
    const newRatio = (newWidth - newStrokeWidth) / 2;
    const newCircumference = 2 * Math.PI * newRatio;
    const newStrokeDashoffset =
      ((270 - (360 - circleAngle) / 2) / 360) * newCircumference;
    const newStrokeDasharray = (circleAngle / 360) * newCircumference;
    const newBar = percent * newStrokeDasharray;
    const newOffsetBar = newCircumference - newBar;

    //progress bar properties
    const progressBarAnchor = width / 2 - (newWidth - strokeWidth) / 2;
    const progressBarRatio = (newWidth - strokeWidth) / 2;
    const progressBarCircumference = 2 * Math.PI * progressBarRatio;
    const progressBarStrokeDashoffset =
      ((270 - (360 - circleAngle) / 2) / 360) * progressBarCircumference;
    const progressBarStrokeDasharray =
      (circleAngle / 360) * progressBarCircumference;
    const progressBar = percent * progressBarStrokeDasharray;
    const progressBarOffsetBar = progressBarCircumference - progressBar;

    //Apply progress bar properties
    progress.current.style.width = '100%';
    progress.current.style.height = '100%';
    progress.current.style.fill = 'none';
    progress.current.style.stroke = color;
    progress.current.setAttribute('cx', progressBarRatio);
    progress.current.setAttribute('cy', progressBarRatio);
    progress.current.setAttribute('r', progressBarRatio);
    progress.current.style.strokeDashoffset = progressBarStrokeDashoffset;
    progress.current.style.strokeWidth = strokeWidth;
    progress.current.style.transform = `translate(${progressBarAnchor}px,${progressBarAnchor}px)`;
    progress.current.style.strokeDasharray = `${progressBar} ${progressBarOffsetBar}`;

    //apply progress point properties
    progressPoint.current.style.width = '100%';
    progressPoint.current.style.height = '100%';
    progressPoint.current.style.fill = 'none';
    progressPoint.current.style.stroke = color;
    progressPoint.current.setAttribute('cx', newRatio);
    progressPoint.current.setAttribute('cy', newRatio);
    progressPoint.current.setAttribute('r', newRatio);
    progressPoint.current.style.strokeDashoffset =
      newStrokeDashoffset - newBar + 3;
    progressPoint.current.style.strokeWidth = newStrokeWidth;
    progressPoint.current.style.transform = `translate(${newAnchor}px,${newAnchor}px)`;
    progressPoint.current.style.strokeDasharray = `3 ${
      newOffsetBar + newBar - 3
    }`;
  });

  /**Renders a tick on the position that corresponds to the passed in value
   * @param {Number} positionValue - value to put the mark at
   * @returns {Circle} - a circle svg element modified to look like a tick mark
   */
  const renderTick = positionValue => {
    const newStrokeWidth = strokeWidth;
    const newWidth = width - newStrokeWidth;
    const newAnchor = width / 2 - (newWidth - newStrokeWidth) / 2;
    const newRatio = (newWidth - newStrokeWidth) / 2;
    const newCircumference = 2 * Math.PI * newRatio;
    const newStrokeDashoffset =
      ((270 - (360 - circleAngle) / 2) / 360) * newCircumference;
    const newStrokeDasharray = (circleAngle / 360) * newCircumference;
    const tickPercentLocaion =
      (positionValue + minMaxPadding - props.min) / (range + minMaxPadding * 2);
    const newBar = tickPercentLocaion * newStrokeDasharray;
    const newOffsetBar = newCircumference - newBar;
    let color = Colors.lightPurple;
    if (props.value > positionValue) {
      color = Colors.black;
    }

    return (
      <circle
        className='animatedDialElement'
        cx={newRatio}
        cy={newRatio}
        r={newRatio}
        style={{
          width: '100%',
          height: '100%',
          fill: 'none',
          stroke: color,
          strokeDashoffset: newStrokeDashoffset - newBar + 3,
          strokeWidth: newStrokeWidth,
          transform: `translate(${newAnchor}px,${newAnchor}px)`,
          strokeDasharray: `3 ${newOffsetBar + newBar - 3}`,
        }}
      />
    );
  };

  return (
    <div
      className={`Dial ${props.customClass}`}
      style={{ width: props.size, height: props.size }}>
      <svg className='dialSvg' style={{transform: `rotate(${props.rotation}deg) scale(${props.mirror?-1:1},1)`}}>
        <circle ref={base}></circle>
        <circle className='animatedDialElement' ref={progress} />
        <circle className='animatedDialElement2' ref={progressPoint} />
        {renderTick(props.min)}
        {renderTick(props.max)}
        {renderTick(warningMin)}
        {renderTick(warningMax)}
      </svg>
      <div className='dataContainer'>
        <h5 className='title' style={{ fontSize: 0.075 * props.size }}>
          {props.title}
        </h5>
        <h5 className='value' style={{ fontSize: 0.18 * props.size }}>
          <CountUp end={props.value} duration={1} decimals={1} />
        </h5>
        <h5 className='unit' style={{ fontSize: 0.1 * props.size }}>
          {props.unit}
        </h5>
      </div>
    </div>
  );
};

export default Dial;
