import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import Intro from './pages/intro';
import Work from './pages/work';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import LOGO from './img/logo.svg';

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
          <Contact />
          <div className="footer">
            <p className="footer__text">Site by Amy Liang</p>
            <img className="footer__logo" src={LOGO} alt="Personal Logo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
