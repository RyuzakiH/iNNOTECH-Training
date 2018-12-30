import * as actionTypes from './actionTypes';

const iState = {
    counters: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }
    ]
}

const reducer = (state = iState, action) => {
    switch (action.type) {
        case actionTypes.RESET_COUNTERS:
            return {
                ...state,
                counters: [...state.counters].map(c => { c.value = 0; return c; })
            }
        case actionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counters: [...state.counters].map(c => { c.value = (c.id === action.counterId) ? c.value + 1 : c.value; return c; })
            }
        case actionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                counters: [...state.counters].map(c => { c.value = (c.id === action.counterId) ? c.value - 1 : c.value; return c; })
            }
        case actionTypes.DELETE_COUNTER:
            return {
                ...state,
                counters: [...state.counters].filter(c => c.id !== action.counterId)
            }
        default:
            return state;
    }
};

export default reducer;