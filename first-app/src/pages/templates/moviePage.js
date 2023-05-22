import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function MoviePage() {
    const location = useLocation();
    return (
        <div>
            Movie Page
            <h4>{location.state.movieTitle}</h4>
            <h5>{location.state.rating}</h5>
            <Link to="/movies">Go back to Movies</Link>
        </div>
    );
}

export default MoviePage;