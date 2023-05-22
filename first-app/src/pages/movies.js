import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviePanel from './templates/moviePanel';

class Movies extends Component {
    render() {
        return (
            <div>
                <h5>Movies</h5>
                <Link to="../">Go back to Home</Link>

                <MoviePanel movieTitle="Interstellar" rating="9/10" />
                <MoviePanel movieTitle="Avengers" rating="8/10" />
                <MoviePanel movieTitle="A Quiet Place" rating="8/10" />
            </div>
        );
    }
}

export default Movies;