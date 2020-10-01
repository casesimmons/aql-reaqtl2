import React from 'react';
import Navbar from './Navbar';
import Graphs from './Graphs';
import LineChart from './LineChart';
import Analytics from './Analytics';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Graphs />
      <LineChart />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
