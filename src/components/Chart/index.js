import React from 'react';
import './index.scss';

//Import Local Files
//...

//Import Components
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

/**
 * Chart, using recharts: recharts.org
 */
const Chart = () => {
  
  
  // Generate dummy data for testing
  const dummyData = generateDummyData();
  console.log(dummyData)

  return (
    <div className='Chart'>
      <LineChart 
        width={600} 
        height={300} 
        data={dummyData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="x"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>

    </div>
  
  );
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
