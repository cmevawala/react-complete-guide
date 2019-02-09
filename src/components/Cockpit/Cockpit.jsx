import React, { useEffect, useRef, useContext } from "react";

import css from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  let btnClass = "";
  const classes = [];

  // useEffect(() => {
  //   console.log("Cockpit.js");
  //   alert("Hello");
  // }, [props.persons]);

  const toggleBtnRef = useRef(null);
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log("Cockpit.js");
    // alert("Hello");

    toggleBtnRef.current.click();
  }, []);


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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={context.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
