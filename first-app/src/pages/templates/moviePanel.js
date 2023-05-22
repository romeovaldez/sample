import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class MoviePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: props.movieTitle,
            rating: props.rating,
            viewClicked: false
        }
    }

    viewMoviePage = () => {
        this.setState({
            movieTitle: "Updated " + this.state.movieTitle,
            rating: "Updated " + this.state.rating,
            viewClicked: true
        });
    }

    render() {
        let movieTitle = this.props.movieTitle;
        movieTitle = movieTitle.replaceAll(" ", "");
        return (
            <div>
                { this.state.viewClicked && ( <Navigate to={"./" + movieTitle} state={this.state} />) }
                <h4>{this.props.movieTitle}</h4>
                <h5>{this.props.rating}</h5>
                <button onClick={this.viewMoviePage}>View</button>
            </div>
        );
    }
}

export default MoviePanel;