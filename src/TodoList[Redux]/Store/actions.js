import * as actionTypes from './actionTypes';

export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        task: task
    };
};

export const deleteTask = (taskId) => {
    return {
        type: actionTypes.DELETE_TASK,
        taskId: taskId
    };
};

export const markTaskAsDone = (taskId) => {
    return {
        type: actionTypes.MARK_TASK_AS_DONE,
        taskId: taskId
    };
};

export const markTaskAsUndone = (taskId) => {
    return {
        type: actionTypes.MARK_TASK_AS_UNDONE,
        taskId: taskId
    };
};

export const invertTaskCompleteState = (taskId) => {
    return {
        type: actionTypes.INVERT_TASK_COMPLETE_STATE,
        taskId: taskId
    };
};