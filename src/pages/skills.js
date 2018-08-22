import React, { Component } from 'react';
import SkillIcon from '../components/skillicon';

/* icon imports*/
import html from '../img/skills/html.svg';
import css from '../img/skills/css.svg';
import javascript from '../img/skills/javascript.svg';
import reactIcon from '../img/skills/react.svg';
import sass from '../img/skills/sass.svg';

import illustrator from '../img/skills/illustrator.svg';
import photoshop from '../img/skills/photoshop.svg';
import premiere from '../img/skills/premiere.svg';
import vector from '../img/skills/vector.svg';
import logo from '../img/skills/logo.svg';

import cIcon from '../img/skills/c.svg';
import java from '../img/skills/java.svg';
import racket from '../img/skills/racket.svg';
import python from '../img/skills/python.svg';

class Work extends Component {
  WEBDEV = [{icon: html, label: "HTML"},{icon: css, label: "CSS"},
            {icon: javascript, label: "JavaScript"},{icon: reactIcon, label: "React.js"},{icon: sass, label: "SASS"}];

  DESIGN = [{icon: illustrator, label: "Illustrator"},{icon: photoshop, label: "Photoshop"},
            {icon: premiere, label: "Premiere"},{icon: vector, label: "Graphic Design"},{icon: logo, label: "Logo Design"}];

  CODING = [{icon: cIcon, label: "C"},{icon: java, label: "Java"},{icon: python, label: "Python"},{icon: racket, label: "Racket"}];

  render() {
    return (
      <div className="section__content skills" id="skills">
        <h1 className="section__title">Skills</h1>
          <div className="skill__section">
            <h2 className="skill__label">Web Dev</h2>
            { this.WEBDEV.map((value,key) => <SkillIcon icon={value.icon} label={value.label} key={key}/>) }
          </div>
          <div className="skill__section">
            <h2 className="skill__label">Design</h2>
            { this.DESIGN.map((value,key) => <SkillIcon icon={value.icon} label={value.label} key={key}/>) }
          </div>
          <div className="skill__section">
            <h2 className="skill__label">Coding</h2>
            { this.CODING.map((value,key) => <SkillIcon icon={value.icon} label={value.label} key={key}/>) }
          </div>
      </div>
    );
  }
}

export default Work;
