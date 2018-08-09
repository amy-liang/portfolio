import React, { Component } from 'react';

class Sidenav extends Component {
  MENU_ITEMS = ["01","02","03","04"];

  render() {
    return (
      <div className="sidenav">
      <object type="image/svg+xml" data="../../public/logo.svg"/>
        <ul className="sidenav__list">
          { this.MENU_ITEMS.map((value,key) => <li className="sidenav__item" key={key}>{value}</li>) }
        </ul>
      </div>
    );
  }
}

export default Sidenav;
