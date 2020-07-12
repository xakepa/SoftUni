import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnReact from './LearnReact';
import Code from './Code';

class App extends React.Component {

  renderResult = (a, b) => a + b;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LearnReact />
          <p>
            Edit <Code>src/App.js</Code> and save to reload.
        </p>
          <p> Hello, React </p>
          <p> Result: {this.renderResult(2, 5)}</p>
          <p>Created, by Plamen</p>
          <LearnReact />

        </header>
      </div>
    );
  }
}

export default App;
