import * as actionTypes from './actionTypes';

const iState = {
    movies: []
}

const reducer = (state = iState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        case actionTypes.LIKE_MOVIE:
            return {
                ...state,
                movies: [...state.movies].map(m => {
                    m.liked = (m._id === action.movieId) ? !m.liked : m.liked;
                    return m;
                })
            }
        case actionTypes.DELETE_MOVIE:
            return {
                ...state,
                movies: [...state.movies].filter(m => m._id !== action.movieId)
            }
        default:
            return state;
    }
};

export default reducer;