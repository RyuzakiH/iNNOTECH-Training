import * as actionTypes from './actionTypes';

const iState = {
    loggedIn: false,
    employees: [],
    loginRedirectPath: '/admin-panel-redux'
}

const reducer = (state = iState, action) => {
    switch (action.type) {
        case actionTypes.SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees
            }
        case actionTypes.LOGIN_SUCCES:
            return {
                ...state,
                loggedIn: true
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loggedIn: false
            }
        case actionTypes.SET_LOGIN_REDIRECT_PATH:
            return {
                ...state,
                loginRedirectPath: action.path
            }
        default:
            return state;
    }
};

export default reducer;