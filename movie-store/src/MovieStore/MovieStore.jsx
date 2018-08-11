import React from 'react';
import Table from './Table/Table'
import * as fakeApi from "./services/fakeMovieService";
import './MovieStore'

class MovieStore extends React.Component {

    state = {
        movies: []
    }

    componentDidMount() {
        this.setState({
            movies: fakeApi.getMovies().map(m => {
                m.liked = false;
                m.genre = m.genre.name;
                m.stock = m.numberInStock;
                m.rate = m.dailyRentalRate;
                return m;
            })
        });
    }

    likeMovieHandler = (id) =>
        this.setState({ movies: [...this.state.movies].map(m => { m.liked = (m._id === id) ? !m.liked : m.liked; return m; }) })

    deleteMovieHandler = (id) =>
        setTimeout(() => this.setState({ movies: [...this.state.movies].filter(m => m._id !== id) }), 500)

    render() {
        return (
            <div className="movieStore">
                <div className="container">
                    <div className="row">
                        <p style={{ padding: "10px", margin: "10px", paddingLeft: '0px' }}> Showing {this.state.movies.length} movies in the database </p>
                    </div>

                    <div className="row">
                        <Table
                            data={this.state.movies}
                            onMovieLike={this.likeMovieHandler}
                            onMovieDelete={this.deleteMovieHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieStore;
