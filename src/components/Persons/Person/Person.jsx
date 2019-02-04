import React from 'react';

import css from './Person.css'; 

const Person = (props) => {

    return (
        <div className={css.person}>
            <p onClick={props.onClick}>{props.name} Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
} 

export default Person;