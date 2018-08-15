import React, { Component } from 'react';
import TimelineCard from '../components/timelinecard';

class Work extends Component {
  render() {
    return (
      <div className="section__content work" id="work">
        <h1 className="section__title">Work Experience</h1>
        <TimelineCard end="top" side="left"/>
        <TimelineCard side="right"/>
        <TimelineCard end="bot" side="left"/>
      </div>
    );
  }
}

export default Work;
