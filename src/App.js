import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import Intro from './pages/intro';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Sidenav/>
        <div className="content">
          <Intro/>
        </div>
      </div>
    );
  }
}

export default App;
