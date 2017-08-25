import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    //className used in JSX instead of class
    const name = {'first':"Jake", 'last':'Funke'}
    return (
      <div className="App">
          <h2>{helloWorld}</h2>
          <p>Hello Mr. {name.last}. Or {name.first} I guess. Welcome to your site.</p>
      </div>
    );
  }
}

export default App;
