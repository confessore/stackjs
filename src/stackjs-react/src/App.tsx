import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
