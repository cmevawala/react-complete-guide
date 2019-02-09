import React, { Component } from "react";
import PropTypes from 'prop-types';

import Aux from "../../../hoc/Auxilary";
import withClass from "../../../hoc/WithClass";

import css from "./Person.module.css";
class Person extends Component {
  constructor(props) {
    super(props);
    console.log("Person.js -- Inside constructor()", this.props.index);
    this.inputElementRef = React.createRef();
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
        { this.props.isAuthenticated ? <p> Authenticated </p> : <p> Login </p> }
        <p onClick={this.props.onClick}>
          {this.props.name} Age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => {this.inputElement = inputEl}}  .. Old method of using Ref
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }

  componentDidMount() {
    console.log("Person.js -- Inside componentDidMount()", this.props.index);
    
    // Old method of using Ref
    // this.inputElement.focus();

    this.inputElementRef.current.focus();

  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default withClass(Person, css.person);
