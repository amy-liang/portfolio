import React, { Component } from 'react';

class TimelineCard extends Component {

  render() {
    return (
      <div className="timeline-card">
        <div className={"timeline-card__circle" + (this.props.end === "top"? "--top" : "")}></div>
        <div className="timeline-card__line"></div>
        <div className={"timeline-card__content" + (this.props.side === "left"? "--left" : this.props.side === "right"? "--right" : "")}></div>
        <div className={"timeline-card__circle" + (this.props.end === "bot"? "--bot" : "")}></div>
        </div>
    );
  }
}

export default TimelineCard;
