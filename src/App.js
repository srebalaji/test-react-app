import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.Apicall();
  }

  componentWillMount() {
    
  }

  Apicall() {
    axios.get('https://api.github.com/users/srebalaji')
      .then(res => {
        this.setState(res.data);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.state.login}</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
