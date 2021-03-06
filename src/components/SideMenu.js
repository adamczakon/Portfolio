import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    let menuClasses = "side-menu";
    if (this.props.show) {
      menuClasses = "side-menu open";
    }
    return (
      <div className={menuClasses}>
        <a href='#projects' onClick={this.props.toggle}>
          Projects
        </a>
        <a href='#about' onClick={this.props.toggle}>
          About
        </a>
      </div>
    );
  }
}
