import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Graphs from './Graphs';
import Analytics from './Analytics';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Graphs />
    <Analytics />
    <Footer />
    </div>
  );
}

export default App;
