import React, { Component } from 'react';
import ProjectCard from '../components/projectcard';
import Background1 from '../img/background1.png';
import Background2 from '../img/background2.png';
import Background3 from '../img/background3.png';
import CSS from '../img/css.svg';
import HTML from '../img/html.svg';
import JAVA from '../img/java.svg';
import JS from '../img/javascript.svg';
import REACT from '../img/react.svg';
import SASS from '../img/sass.svg';

class Projects extends Component {
  PROJECTS = [{title: "Portfolio", description: "Personal Website", time: "Current", img: Background1, 
              children: <div><object className="project-card__icon" type="image/svg+xml" data={HTML} aria-label="html-icon"/>
              <object className="project-card__icon" type="image/svg+xml" data={JS} aria-label="javascript-icon"/>
              <object className="project-card__icon" type="image/svg+xml" data={REACT} aria-label="react-icon"/>
              <object className="project-card__icon" type="image/svg+xml" data={SASS} aria-label="sass-icon"/></div>},

              {title: "GradeBot", description: "Grade Calculator", time: "2017", img: Background2, 
              children: <div><object className="project-card__icon" type="image/svg+xml" data={HTML} aria-label="html-icon"/>
              <object className="project-card__icon" type="image/svg+xml" data={CSS} aria-label="css-icon"/>
              <object className="project-card__icon" type="image/svg+xml" data={JS} aria-label="javascript-icon"/></div>},

              {title: "Anthem", description: "Song Generator", time: "2017", img: Background3,
              children: <object className="project-card__icon" type="image/svg+xml" data={JAVA} aria-label="java-icon"/>}];

  render() {
    return (
      <div className="section__content projects" id="projects">
        <h1 className="section__title">Projects</h1>
        { this.PROJECTS.map((value,key) => <ProjectCard key={key} title={value.title} 
          description={value.description} time={value.time} img={value.img}>{value.children}</ProjectCard>)}
      </div>
    );
  }
}

export default Projects;
