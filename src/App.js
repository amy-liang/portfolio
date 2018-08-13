import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import Intro from './pages/intro';
import Work from './pages/work';
import Skills from './pages/skills';
import Projects from './pages/projects';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Sidenav/>
        <div className="content">
          <Intro/>
          <Work/>
          <Skills/>
          <Projects/>
        </div>
      </div>
    );
  }
}

export default App;
