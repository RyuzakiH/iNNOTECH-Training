import * as actionTypes from './actionTypes';

export const resetCounters = () => {
    return {
        type: actionTypes.RESET_COUNTERS,
    };
};

export const incrementCounter = (counterId) => {
    return {
        type: actionTypes.INCREMENT_COUNTER,
        counterId: counterId
    };
};

export const decrementCounter = (counterId) => {
    return {
        type: actionTypes.DECREMENT_COUNTER,
        counterId: counterId
    };
};

export const deleteCounter = (counterId) => {
    return {
        type: actionTypes.DELETE_COUNTER,
        counterId: counterId
    };
};