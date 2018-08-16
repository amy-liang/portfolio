import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Sidenav extends Component {
  MENU_ITEMS = [{number: "01", link: "#work"},{number: "02", link: "#skills"},
                {number: "03", link: "#projects"},{number: "04", link: "#contact"}];

  render() {
    return (
      <div className="sidenav">
      <a href="#"><img className="sidenav__logo" src={logo} alt="Personal Logo"/></a>
        <ul className="sidenav__list">
          { this.MENU_ITEMS.map((value,key) => <a href={value.link}><li className="sidenav__item" key={key}>{value.number}</li></a>) }
        </ul>
      </div>
    );
  }
}

export default Sidenav;
