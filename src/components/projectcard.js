import React, { Component } from 'react';

class ProjectCard extends Component {

  render() {
    return (
      <div className="project-card">
        <div className="project-card__content">
            <p className="project-card__title">{ this.props.title }</p>
            <p className="project-card__text">{ this.props.description + " | " + this.props.time }</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
