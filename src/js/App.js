import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
import '../css/App.css';
import FrameworkPoll from '../components/votingPoll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>OBI
            <img src={logo} className="App-logo" alt="logo" />
            <code>FENIX</code>
          </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > Learning React
          </a>
        </header>

        <div className="container">
          <FrameworkPoll />
        </div>
      </div>
    );
  }
}

export default App;
