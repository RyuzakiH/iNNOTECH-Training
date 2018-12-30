import React from 'react';
import Task from './Task/Task';

const tasks = (props) => {
    return (
        <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px' }}>
            {
                props.tasks.map(task => {
                    return <Task
                        key={task.id}
                        task={task}
                        onClick={props.onTaskClick}
                        onDelete={props.onTaskDelete} />
                })
            }
        </ul>
    )
};

export default tasks;