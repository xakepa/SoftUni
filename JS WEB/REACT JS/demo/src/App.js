import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnReact from './LearnReact';
import Person from './Person';
import Button from './Clicker';
import Input from './Input';

class App extends React.Component {

  renderResult = (a, b) => a + b;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LearnReact />
          <Person name="Plamen" />
          <Input />
          <Button counter={0} />
          <p>Created, by Plamen</p>
        </header>
      </div>
    );
  }
}

export default App;
