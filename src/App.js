import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Navbar from './Navbar';
// import CircleGraph from './CircleGraph';
// import LineChart from './LineChart';
import LineChartZoom from './LineChartZoom';
import PieChart from './pieChart';
import Analytics from './Analytics';
import Footer from './Footer';
import './App.css';

function App() {
  const generateData = (value, length = 4) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }));

  const [data, setData] = useState(generateData(0));
  // const changeData = () => {
  //   setData(generateData());
  // };

  useEffect(() => {
    setData(generateData());
  }, [!data]);

  return (
    <div className="App">
      <Navbar />
      <div id="graphdiv">
        <div id="graphs">
          <PieChart
            data={data}
            width={200}
            height={200}
            innerRadius={50}
            outerRadius={80}
          />
          <LineChartZoom />
        </div>
      </div>
      {/* <Analytics /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
