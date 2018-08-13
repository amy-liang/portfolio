import React, { Component } from 'react';
import selfportrait from '../img/selfportrait.png';

class Intro extends Component {
  render() {
    return (
      <div className="section__content intro">
        <img className="intro__img" src={selfportrait} alt="Self Portrait Vector"/>
        <h1>Hi, this is my blurb here.</h1>
        <p>This is my subtitle</p>
      </div>
    );
  }
}

export default Intro;
