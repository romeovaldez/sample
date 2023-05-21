import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h5>Home</h5>
                <Link to="/movies">Go to Movies</Link>
            </div>
        );
    }
}

export default Home;
