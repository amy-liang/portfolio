import React, { Component } from 'react';

class ProjectCard extends Component {

  render() {
    return (
      <div className="project-card" style={{ backgroundImage: "url(" + this.props.img +")" }}>
            <div className="over">
              <p className="project-card__title">{ this.props.title }</p>
              <p className="project-card__text">{ this.props.description + " | " + this.props.time }</p>
            </div>
            <div className="under">
            </div>
        </div>
    );
  }
}

export default ProjectCard;
