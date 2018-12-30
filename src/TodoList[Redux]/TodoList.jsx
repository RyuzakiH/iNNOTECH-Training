import React from 'react';
import Tasks from './Tasks/Tasks';
import Header from './Header/Header';
import reduxComponent, { Reduxx } from '../reduxUtils';
import reducer from './Store/reducer';
import * as actions from './Store/actions';
import './TodoList.css';

const todoList = (props) => {
    return (
        <div className="TodoList" >
            <Header
                onTaskAdd={props.onTaskAdd} />

            <Tasks
                tasks={props.tasks}
                onTaskClick={props.onTaskCompleteStateInverted}
                onTaskDelete={props.onTaskDelete}
            />
        </div >
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTaskAdd: (task) => dispatch(actions.addTask(task)),
        onTaskDelete: (taskId) => dispatch(actions.deleteTask(taskId)),
        onTaskCompleteStateInverted: (taskId) => dispatch(actions.invertTaskCompleteState(taskId))
    };
}

export default reduxComponent(todoList, new Reduxx(reducer, false, [], mapStateToProps, mapDispatchToProps));