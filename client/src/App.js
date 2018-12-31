import React, { Component } from 'react';
import logo from './logo.svg';
import AppNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
      </div>
    );
  }
}

export default App;
