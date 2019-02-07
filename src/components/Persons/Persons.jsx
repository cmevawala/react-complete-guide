import React, { Component } from "react";

import Person from "./Person/Person";
class Persons extends Component {

  constructor(props) {
    super(props);
    console.log("Persons.js -- Inside constructor()");
  }

  // Create
  componentWillMount() {
    console.log("Persons.js -- Inside componentWillMount()");
  }

  // Update
  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE] Persons.js -- Inside componentWillReceiveProps()", nextProps);
  }

  // Create/Update -  16.3
  static getDerivedStateFromProps(props, state) {
    console.log("[UPDATE] Persons.js -- Inside getDerivedStateFromProps()", props);
    return true;
  }

  // Update
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE] Persons.js -- Inside shouldComponentUpdate()", nextProps, this.props.persons);
    return nextProps.persons !== this.props.persons;
  }

  // Update
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE] Persons.js -- Inside componentWillUpdate()", nextProps, nextState);
  }

  // Update 16.3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[UPDATE] Persons.js -- Inside getSnapshotBeforeUpdate()", prevProps, prevState);
    return null;
  }

  // Update
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[UPDATE] Persons.js -- Inside componentDidUpdate()");
  }

  render() {
    console.log("Persons.js -- Inside render()");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          index={index}
          key={person.id}
          name={person.name}
          age={person.age}
          onClick={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }

  componentDidMount() {
    console.log("Persons.js -- Inside componentDidMount()");
  }
}

export default Persons;
