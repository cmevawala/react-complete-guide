import React, { useEffect, useRef } from "react";

import css from "./Cockpit.module.css";

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

  // useEffect(() => {
  //   console.log("Cockpit.js");
  //   alert("Hello");
  // }, [props.persons]);

  let toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("Cockpit.js");
    // alert("Hello");
    
    toggleBtnRef.current.click();

  }, []);

  return (
    <div className={css.Cockpit}>
      <h1>Hi, I am React App</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
