import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Sidenav extends Component {
  MENU_ITEMS = ["01","02","03","04"];

  render() {
    return (
      <div className="sidenav">
      <img className="sidenav__logo" src={logo}/>
        <ul className="sidenav__list">
          { this.MENU_ITEMS.map((value,key) => <li className="sidenav__item" key={key}>{value}</li>) }
        </ul>
      </div>
    );
  }
}

export default Sidenav;
