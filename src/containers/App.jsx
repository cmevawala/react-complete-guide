import React, { Component } from "react";

import css from "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Manu1", age: 10 },
      { id: "2", name: "Manu2", age: 11 },
      { id: "3", name: "Manu3", age: 12 }
    ],
    showPersons: false
  };

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
      <div className={css.App}>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />

        {persons}
      </div>
    );
  }
}

export default App;
