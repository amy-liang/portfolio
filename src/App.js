import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import Intro from './pages/intro';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidenav/>
      <Intro/>
      </div>
    );
  }
}

export default App;
