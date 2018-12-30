import * as actionTypes from './actionTypes';
import * as fakeApi from "../services/fakeMovieService";

export const getMovies = () => {
    return dispatch => {

        const movies = fakeApi.getMovies().map(m => {
            m.liked = false;
            m.genre = m.genre.name ? m.genre.name : m.genre;
            m.stock = m.numberInStock;
            m.rate = m.dailyRentalRate;
            return m;
        })

        dispatch(setMovies(movies))
    };
};

export const setMovies = (movies) => {
    return {
        type: actionTypes.SET_MOVIES,
        movies: movies
    };
};

export const likeMovie = (movieId) => {
    return {
        type: actionTypes.LIKE_MOVIE,
        movieId: movieId
    };
};

export const deleteMovie = (movieId) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        movieId: movieId
    };
};