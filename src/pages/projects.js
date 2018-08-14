import React, { Component } from 'react';
import ProjectCard from '../components/projectcard';
import Background1 from '../img/background1.png';

class Projects extends Component {
  render() {
    return (
      <div className="section__content projects" id="projects">
        <h1 className="section__title">Projects</h1>
        <ProjectCard title="Portfolio" description="Personal Website" time="Current" img={Background1}/>
        <ProjectCard title="GradeBot" description="Grade Calculator" time="2017"/>
        <ProjectCard title="Anthem" description="Song Generator" time="2017"/>
      </div>
    );
  }
}

export default Projects;
