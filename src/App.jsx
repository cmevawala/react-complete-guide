import React, { Component } from "react";

import css from './App.css';

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:"1", name: "Manu1", age: 10 },
      { id:"2", name: "Manu2", age: 11 },
      { id:"3", name: "Manu3", age: 12 }
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
    const person = { ...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return <Person key={person.id} name={person.name} age={person.age} 
                            onClick={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangeHandler(event, person.id) } />
            })
          }
          
          {/* <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            onClick={this.switchNameHandler.bind(this, "Max02")}
            changed={this.nameChangeHandler}
          >
            I am Person 2
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );

      btnClass = css.red;
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(css.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(css.bold);
    }

    return (
        <div className={css.App}>
          <h1>Hi, I am React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );

    // JSX => JavaScript
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World'));
  }
}

export default App;
