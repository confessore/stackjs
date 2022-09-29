import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
