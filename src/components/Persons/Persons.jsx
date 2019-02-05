import React, { Component } from "react";

import Person from "./Person/Person";
class Persons extends Component {

  constructor(props) {
    super(props);
    console.log("Persons.js -- Inside constructor()");
  }

  componentWillMount() {
    console.log("Persons.js -- Inside componentWillMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE] Persons.js -- Inside componentWillReceiveProps()", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE] Persons.js -- Inside shouldComponentUpdate()", nextProps, this.props.persons);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE] Persons.js -- Inside componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate() {
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
