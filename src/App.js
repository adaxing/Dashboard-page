import React, { Component } from 'react';
import './css/App.css';
import MainContent from './mainContent';
import NavBar from './navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
