import * as actionTypes from './actionTypes';

const iState = {
    tasks: [
        { id: 0, text: "Hit the gym", done: false },
        { id: 1, text: "Pay bills", done: false },
        { id: 2, text: "Meet George", done: false },
        { id: 3, text: "Buy eggs", done: false },
        { id: 4, text: "Read a book", done: false },
        { id: 5, text: "Organize office", done: false }
    ]
}

const reducer = (state = iState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks]
                    .concat({ id: state.tasks[state.tasks.length - 1].id + 1, text: action.task })
            }
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks].filter(task => task.id !== action.taskId)
            }
        case actionTypes.MARK_TASK_AS_DONE:
            return {
                ...state,
                tasks: [...state.tasks]
                    .map(task => { task.done = (task.id === action.taskId) ? true : task.done; return task; })
            }
        case actionTypes.MARK_TASK_AS_UNDONE:
            return {
                ...state,
                tasks: [...state.tasks]
                    .map(task => { task.done = (task.id === action.taskId) ? false : task.done; return task; })
            }
        case actionTypes.INVERT_TASK_COMPLETE_STATE:
            return {
                ...state,
                tasks: [...state.tasks]
                    .map(task => { task.done = (task.id === action.taskId) ? !task.done : task.done; return task; })
            }
        default:
            return state;
    }
};

export default reducer;