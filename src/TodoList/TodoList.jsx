import React from 'react';
import Tasks from './Tasks/Tasks';
import Header from './Header/Header'
import './TodoList.css';

class TodoList extends React.Component {

    state = {
        tasks: [
            { id: 0, text: "Hit the gym", done: false },
            { id: 1, text: "Pay bills", done: false },
            { id: 2, text: "Meet George", done: false },
            { id: 3, text: "Buy eggs", done: false },
            { id: 4, text: "Read a book", done: false },
            { id: 5, text: "Organize office", done: false }
        ]
    }

    TaskClickHandler = (id) =>
        this.setState({ tasks: [...this.state.tasks].map(task => { task.done = (task.id === id) ? !task.done : task.done; return task; }) });

    TaskDeleteHandler = (id) => this.setState({ tasks: [...this.state.tasks].filter(task => task.id !== id) });

    AddTaskClickHandler = (task) =>
        this.setState({ tasks: [...this.state.tasks].concat({ id: this.state.tasks[this.state.tasks.length - 1].id + 1, text: task }) });

    render() {
        return (
            <div className="TodoList" >
                <Header
                    onTaskAdd={this.AddTaskClickHandler} />

                <Tasks
                    tasks={this.state.tasks}
                    onTaskClick={this.TaskClickHandler}
                    onTaskDelete={this.TaskDeleteHandler}
                />
            </div>
        );
    }
}

export default TodoList;