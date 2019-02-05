import React, { Component } from "react";

import css from "./Person.css";

class Person extends Component {

  constructor(props) {
    super(props);
    console.log("Person.js -- Inside Constructor()");
  }

  componentWillMount() {
    console.log("Person.js -- Inside componentWillMount()");
  }

  render() {
    console.log("Person.js -- Inside render()");
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

  componentDidMount() {
    console.log("Person.js -- Inside componentDidMount()");
  }

}

export default Person;
