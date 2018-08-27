import React, { Component } from 'react';
import TimelineCard from '../components/timelinecard';

class Work extends Component {
  TIMELINECARDS = [{title: "Digital Designer", company: "Maple Leaf Foods", time: "May - Aug 2018", end: "top", side:"left",
                    paragraph: "At Maple Leaf Foods, I took on a variety of tasks including iOS app prototypes, app icons, posters, short videos and the development of a DesignHub website built with React.js, and TypeScript."},
  {title: "Graphic Designer", company: "Federation of Students", time: "Sept 2017 - Apr 2018", side:"right",
   paragraph: "At Feds, the student government of UW, I created posters, banners, flyers and more promotional media for school events. In particular, I helped re-brand UW Wellness Days by working with typography and patterns."},
  {title: "Began BCs", company: "University of Waterloo", time: "Sept 2017", end: "bot", side:"left", 
   paragraph: "I began my Bachelor of Computer Science at the University of Waterloo. Relevant courses include CS 135 (Designing Functional Programs), and CS 136 (Elementary Algorithm Design and Data Abstraction)."}];

  render() {
    return (
      <div className="section__content work" id="work">
        <h1 className="section__title">Timeline</h1>
        <p>Current</p>
        { this.TIMELINECARDS.map((value,key) => <TimelineCard key={key} title={value.title} company={value.company} time={value.time} end={value.end} side={value.side} paragraph={value.paragraph}/>)}
        <p>2017</p>
      </div>
    );
  }
}

export default Work;
