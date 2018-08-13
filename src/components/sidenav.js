import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Sidenav extends Component {
  MENU_ITEMS = [{number: "01", link: "#intro"},{number: "02", link: "#work"},
                {number: "03", link: "#skills"},{number: "04", link: "#projects"}];

  render() {
    return (
      <div className="sidenav">
      <img className="sidenav__logo" src={logo} alt="Personal Logo"/>
        <ul className="sidenav__list">
          { this.MENU_ITEMS.map((value,key) => <a href={value.link}><li className="sidenav__item" key={key}>{value.number}</li></a>) }
        </ul>
      </div>
    );
  }
}

export default Sidenav;
