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
class Chart extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      dummyData: generateDummyData(),
      lineColor: "#8884d8"
    };
  }


  render(){
    return (
      <div className='Chart'>
        <LineChart 
          width={900} 
          height={650} 
          data={this.state.dummyData}
          margin={{top: 45, bottom: 45, right: 20}}
        >
          <XAxis dataKey="x" />
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="y" stroke={this.state.lineColor} activeDot={{r: 8}}/>
        </LineChart>
        <AxesTable dataIn={this.state.dummyData} chartIn={this}/>
      </div>
    );
  }
}

class AxesTable extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displaying: null
    }
  }

  render(){
    const axes = []
    const elements = []
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D']
  
    for (let i = 0; i < 21; i++){
      axes.push("Data " + (i + 1))
    }

  
    //Temporary, will later change for specific data 
    for (let i = 0; i < axes.length; ++i){

      elements.push(<AxisData 
        chartIn={this.props.chartIn} 
        displayColor={colors[i]}
        value={axes[i]}
        tableIn = {this}
        ></AxisData>)
    }


    return(
      <div className='data-table'>
        {elements}
      </div>
    )
  }


}


//Single "button" for changing the values represented on graph
class AxisData extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      color: 'white',
      itemHover: false,
      showing: false,
    };
  }

  determineColor = () => {
    var color = "";
    if (this.state.itemHover){
      color = "white";
    }else{
      color = "gray";
    }
    if (this.state.showing){
      color = this.props.displayColor;
    }
    return color;
  }

  colorChange = () => {
    this.setState({
      itemHover: !this.state.itemHover,
      color: this.determineColor()
    });
  }

  generateData = (chartIn, tableIn) => {
    //Temporary dummy data, will later be changed to represent whatever data we need to read 
    var data = generateDummyData();
    chartIn.setState({
      dummyData: data,
      lineColor: this.props.displayColor
    });
    this.setState({
      showing: true,
      color: this.props.displayColor
    });
    //Reset axis that was previously selected
    var disp = tableIn.state.displaying;
    if (disp != null){
      console.log("true")
      //If we are clicking on the axis that is already showing, do not change
      //This may later need to be changed to stop displaying current axis if we are displaying multiple
      if (disp != this){
        disp.setState({
          showing: false,
          itemHover: false,
          color: 'white'
        });
      }
    }
    tableIn.setState({
      displaying: this
    });
  }

  render(){
    return(
      <div className="axis-data">
        <a 
          onMouseEnter={this.colorChange} 
          onMouseLeave={this.colorChange} 
          onClick={() => this.generateData(this.props.chartIn, this.props.tableIn)} 
          style={{color:this.state.color}}>{this.props.value}
        </a>
      </div>
    );
  }
}

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
