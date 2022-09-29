import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './components/Address';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <Contact />
        <Address />
        <Footer />
      </div>
    </div>
  );
}

export default App;
