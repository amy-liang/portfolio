import React, { Component } from 'react';
import TimelineCard from '../components/timelinecard';

class Work extends Component {
  TIMELINECARDS = [{title: "Digital Designer", company: "Maple Leaf Foods", time: "May - Aug 2018", end: "top", side:"left"},
  {title: "Graphic Designer", company: "Federation of Students", time: "Sept 2017 - Apr 2018", side:"right"},
  {title: "Began BCs", company: "University of Waterloo", time: "Sept 2017", end: "bot", side:"left"}];

  render() {
    return (
      <div className="section__content work" id="work">
        <h1 className="section__title">Timeline</h1>
        { this.TIMELINECARDS.map((value,key) => <TimelineCard key={key} title={value.title} company={value.company} time={value.time} end={value.end} side={value.side} />)}
      </div>
    );
  }
}

export default Work;
