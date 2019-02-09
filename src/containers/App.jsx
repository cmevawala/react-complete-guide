import React, { Component } from "react";

import css from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/WithClass";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxilary";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js -- Inside constructor()");
    this.state = {
      persons: [
        { id: "1", name: "Manu1", age: 10 },
        { id: "2", name: "Manu2", age: 11 },
        { id: "3", name: "Manu3", age: 12 }
      ],
      showPersons: false
    };
  }

  // Introduced 16.3
  static getDerivedStateFromProps(props, state) {
    console.log("App.js -- Inside getDerivedStateFromProps()", props);
    return state;
  }

  componentWillMount() {
    console.log("App.js -- Inside componentWillMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE] App.js -- Inside shouldComponentUpdate()",
      nextProps,
      this.props.persons
    );
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE] App.js -- Inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE] App.js -- Inside componentDidUpdate()");
  }

  switchNameHandler = newName => {
    // console.log("Was Clicked");
    // this.state.persons[0].name = "Max1";

    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: newName, age: 28 },
        { name: newName, age: 29 }
      ]
    });
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    console.log("App.js -- Inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      // HOC : Method 1
      // <WithClass classes={css.App}>

      <Aux>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />

        {persons}
      </Aux>

      // </WithClass>
    );
  }

  componentDidMount() {
    console.log("App.js -- Inside componentDidMount()");
  }
}

// HOC : Method 2
export default withClass(App, css.App);
