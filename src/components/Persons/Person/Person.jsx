import React, { Component } from "react";
import PropTypes from 'prop-types';

import Aux from "../../../hoc/Auxilary";
import withClass from "../../../hoc/WithClass";

import css from "./Person.module.css";
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
      // <div className={css.person}>
      <Aux>
        <p onClick={this.props.onClick}>
          {this.props.name} Age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }

  componentDidMount() {
    console.log("Person.js -- Inside componentDidMount()", this.props.index);
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, css.person);
