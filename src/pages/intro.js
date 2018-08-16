import React, { Component } from 'react';
import selfportrait from '../img/selfportrait.png';

class Intro extends Component {
  render() {
    return (
      <div className="section__content intro" id="intro">
        <img className="intro__img" src={selfportrait} alt="Self Portrait Vector"/>
        <h1>Hi, I'm Amy</h1>
        <p>UW CS - Designer and Developer</p>
      </div>
    );
  }
}

export default Intro;
