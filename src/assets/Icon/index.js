import React from 'react';

import { ReactComponent as Chart } from './Chart.svg';
import { ReactComponent as Checkmark } from './Checkmark.svg';
import { ReactComponent as Info } from './Info.svg';
import { ReactComponent as Launch } from './Launch.svg';
import { ReactComponent as Report } from './Report.svg';
import { ReactComponent as Stop } from './Stop.svg';
import { ReactComponent as Xmark } from './Xmark.svg';

const iconTypes = {
  Chart: Chart,
  Checkmark: Checkmark,
  Info: Info,
  Launch: Launch,
  Report: Report,
  Stop: Stop,
  Xmark: Xmark,
};

/**
 * Renders an icon
 * @param {String} props.name - name of the icon to render
 * @param {String} props.fill - color to render icon in
 * @return {JSX.Element}
 */
const Icon = props => {
  let Icon = iconTypes[props.name];
  return <Icon fill={props.fill} />;
};

export default Icon;
