import React, { Component } from 'react';
import ProjectCard from '../components/projectcard';

import Background1 from '../img/background1.png';
import Background2 from '../img/background2.png';
import Background3 from '../img/background3.png';
import Background4 from '../img/background4.png';

import CSS from '../img/projects/css.svg';
import HTML from '../img/projects/html.svg';
import JAVA from '../img/projects/java.svg';
import JS from '../img/projects/javascript.svg';
import REACT from '../img/projects/react.svg';
import SASS from '../img/projects/sass.svg';
import ILLUSTRATOR from '../img/projects/illustrator.svg';
import PHOTOSHOP from '../img/projects/photoshop.svg';
import VECTOR from '../img/projects/vector.svg';
import LOGODESIGN from '../img/projects/logo.svg';

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
              children: <div><img className="project-card__icon" src={JAVA} alt="java-icon"/></div>},
            
              {title: "Limelight Rebranding", description: "Logo Design, Branding", time: "2018", img: Background4,
              children: <div><img className="project-card__icon" src={ILLUSTRATOR} alt="illustrator-icon"/>
              <img className="project-card__icon" src={PHOTOSHOP} alt="photoshop-icon"/>
              <img className="project-card__icon" src={VECTOR} alt="vector-icon"/>
              <img className="project-card__icon" src={LOGODESIGN} alt="logodesign-icon"/></div>}];

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
