import React, { Component } from "react";

import css from "./Person.css";

class Person extends Component {

  constructor(props) {
    super(props);
    console.log("Person.js -- Inside constructor()", this.props.index);
  }

  // Create
  componentWillMount() {
    console.log("Person.js -- Inside componentWillMount()", this.props.index);
  }

  render() {
    console.log("Person.js -- Inside render()", this.props.index);

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
    console.log("Person.js -- Inside componentDidMount()", this.props.index);
  }

}

export default Person;
