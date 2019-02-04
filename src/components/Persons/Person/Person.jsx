import React, { Component } from "react";

import css from "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className={css.person}>
        <p onClick={this.props.onClick}>
          {this.props.name} Age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
