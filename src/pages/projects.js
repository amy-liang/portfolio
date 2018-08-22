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
              children: <div><img className="project-card__icon" src={HTML} alt="html-icon"/>
              <img className="project-card__icon" src={JS} alt="javascript-icon"/>
              <img className="project-card__icon" src={REACT} alt="react-icon"/>
              <img className="project-card__icon" src={SASS} alt="sass-icon"/></div>},

              {title: "GradeBot", description: "Grade Calculator", time: "2017", img: Background2, 
              children: <div><img className="project-card__icon" src={HTML} alt="html-icon"/>
              <img className="project-card__icon" src={CSS} alt="css-icon"/>
              <img className="project-card__icon" src={JS} alt="javascript-icon"/></div>},

              {title: "Anthem", description: "Song Generator", time: "2017", img: Background3,
              children: <img className="project-card__icon" src={JAVA} alt="java-icon"/>}];

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
