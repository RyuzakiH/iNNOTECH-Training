import React from 'react';
import NewTask from './NewTask/NewTask'
import './Header.css';

const header = (props) => {
    return (
        <div className="header" >
            <h2> Zero To Do List </h2>
            <br />
            <NewTask onTaskAdd={props.onTaskAdd} />
        </div >
    )
};

export default header;