import React from 'react';
import Table from './Table/Table'
import reduxComponent, { Reduxx } from '../reduxUtils';
import reducer from './Store/reducer';
import * as actions from './Store/actions';

class MovieStore extends React.Component {

    componentDidMount() {
        this.props.onMoviesGet();
    }

    render() {
        return (
            <div className="movieStore">
                <div className="container">
                    <div className="row">
                        <p style={{ padding: "10px", margin: "10px", paddingLeft: '0px' }}>
                            Showing {this.props.movies.length} movies in the database
                        </p>
                    </div>

                    <div className="row">
                        <Table
                            data={this.props.movies}
                            onMovieLike={this.props.onMovieLike}
                            onMovieDelete={this.props.onMovieDelete} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onMoviesGet: () => dispatch(actions.getMovies()),
        onMovieLike: (movieId) => dispatch(actions.likeMovie(movieId)),
        onMovieDelete: (movieId) => dispatch(actions.deleteMovie(movieId))
    };
}

export default reduxComponent(MovieStore, new Reduxx(reducer, true, [], mapStateToProps, mapDispatchToProps));
