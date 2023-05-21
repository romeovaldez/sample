import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {
    render() {
        return (
            <div>
                <h5>Movies</h5>
                <Link to="../">Go back to Home</Link>
            </div>
        );
    }
}

export default Movies;