import React, { Component } from 'react';

class SkillIcon extends Component {

  render() {
    return (
      <div className="skill-icon">
        <img className="skill-icon__icon" src={this.props.icon} alt={this.props.label + "-icon"}/>
        <div className="skill-icon__label"><p>{this.props.label}</p></div>
        </div>
    );
  }
}

export default SkillIcon;
