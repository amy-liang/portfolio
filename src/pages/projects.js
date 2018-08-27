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

  PROJECTS = [{title: "Portfolio", description: "Personal Website", time: "Aug 2018", img: Background1, 
              paragraph: "Built using React.js, HTML, JavaScript and SASS, my personal website was created from scratch based upon my own brand. I learned about modular design patterns, React syntax, and SASS tricks.",
              children: <div><img className="project-card__icon" src={HTML} alt="html-icon"/>
              <img className="project-card__icon" src={JS} alt="javascript-icon"/>
              <img className="project-card__icon" src={REACT} alt="react-icon"/>
              <img className="project-card__icon" src={SASS} alt="sass-icon"/></div>},

              {title: "GradeBot", description: "Grade Calculator", time: "Oct 2017", img: Background2, 
              paragraph: "GradeBot was built in pure HTML, CSS and JavaScript, and estimates grades based on current marks or predicted marks. It was a good first step into learning about web development tools.",
              children: <div><img className="project-card__icon" src={HTML} alt="html-icon"/>
              <img className="project-card__icon" src={CSS} alt="css-icon"/>
              <img className="project-card__icon" src={JS} alt="javascript-icon"/></div>},

              {title: "Anthem", description: "Song Generator", time: "June 2017", img: Background3,
              paragraph: "Anthem is a song generator program that uses Last.fm API to filter through song tags, genres and artists to find your next favourite song. Built using Java, I was able to grab from an API and use its functions to create a working program.",
              children: <div><img className="project-card__icon" src={JAVA} alt="java-icon"/></div>},
            
              {title: "Limelight Rebranding", description: "Logo Design, Branding", time: "May 2018", img: Background4,
              paragraph: "Keeping the distinct feel of the old logo, Limelight Dance Crew was re-branded to include a new logo, colour scheme, typography and branding assets.",
              children: <div><img className="project-card__icon" src={ILLUSTRATOR} alt="illustrator-icon"/>
              <img className="project-card__icon" src={PHOTOSHOP} alt="photoshop-icon"/>
              <img className="project-card__icon" src={VECTOR} alt="vector-icon"/>
              <img className="project-card__icon" src={LOGODESIGN} alt="logodesign-icon"/></div>}];

  render() {
    return (
      <div className="section__content projects" id="projects">
        <h1 className="section__title">Projects</h1>
        { this.PROJECTS.map((value,key) => <ProjectCard key={key} title={value.title} 
          description={value.description} time={value.time} img={value.img} paragraph={value.paragraph}>{value.children}</ProjectCard>)}
      </div>
    );
  }
}

export default Projects;
