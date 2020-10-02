import React from 'react';
import Navbar from './Navbar';
import CircleGraph from './CircleGraph';
import LineChart from './LineChart';
import Analytics from './Analytics';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="graphdiv">
        {/* <CircleGraph /> */}
        <LineChart />
      </div>
      {/* <Analytics />
      <Footer /> */}
    </div>
  );
}

export default App;
