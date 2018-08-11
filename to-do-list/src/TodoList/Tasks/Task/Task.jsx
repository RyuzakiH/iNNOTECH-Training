import React from 'react';
import './Task.css';

const task = (props) => {
    return (
        <li onClick={() => props.onClick(props.task.id)} className={props.task.done ? 'checked' : ''}>
            {props.task.text}
            <span className="close" onClick={(e) => { e.stopPropagation(); props.onDelete(props.task.id) }}>×</span>
        </li>
    )
};

export default task;