import React from "react";

import css from "./Cockpit.css";

const Cockpit = props => {
  let btnClass = "";
  const classes = [];

  if (props.showPersons) {
    btnClass = css.red;
  }

  if (props.persons.length <= 2) {
    classes.push(css.red);
  }

  if (props.persons.length <= 1) {
    classes.push(css.bold);
  }

  return (
    <div className={css.Cockpit}>
      <h1>Hi, I am React App</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
