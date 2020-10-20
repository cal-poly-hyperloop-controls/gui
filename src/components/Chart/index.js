import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
//...

/**
 * Contains all the views displaying pod data
 */
const Chart = () => {
  return <div className='Chart'></div>;
};


/**
 * Generates random dummy data to test graph in proper format for recharts. 
 * Return arr of obj in this format: 
 * {
 *    x: x val (based off of dx, starts at 0),
 *    y: y val (random, but max val will be specified by param yMax)
 * }
 * 
 * @param {Number} length - length of array to return, default 10
 * @param {Number} dx - periodic distance between x values, default 1
 * @param {Number} yMax - max val of y vals, default 10
 * @returns {Array} - Array of dummy data 
 */
const generateDummyData = (length=10, dx=1, yMax=10) => {
  let data = []

  for (let i = 0; i < length; i++) {
    data.push({
      x: i * dx,
      y: Math.random() * yMax
    });
  }

  return data;
}
export default Chart;
