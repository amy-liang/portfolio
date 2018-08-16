import React, { Component } from 'react';
import ProjectCard from '../components/projectcard';
import Background1 from '../img/background1.png';

class Projects extends Component {
  PROJECTS = [{title: "Portfolio", description: "Personal Website", time: "Current", img: Background1},
              {title: "GradeBot", description: "Grade Calculator", time: "2017", img: null},
              {title: "Anthem", description: "Song Generator", time: "2017", img: null}];

  render() {
    return (
      <div className="section__content projects" id="projects">
        <h1 className="section__title">Projects</h1>
        { this.PROJECTS.map((value,key) => <ProjectCard key={key} title={value.title} description={value.description} time={value.time} img={value.img} />)}
      </div>
    );
  }
}

export default Projects;
