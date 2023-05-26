import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviePanel from './templates/moviePanel';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterRating: 1,
            sortAscRating: -1,
            sortAscTitle: -1,
            lastSortUpdate: "title",
            removeFilter: true
        }
    }
    
    filterByRating = (e) => {
        this.setState({ filterRating: parseInt(e.target.value), removeFilter: false });
    }
    
    removeFilter = () => {
        this.setState({ removeFilter: !this.state.removeFilter });
    }
    
    sortByRating = () => {
        this.setState({ sortAscRating: -this.state.sortAscRating, lastSortUpdate: "rating" });
    }
    
    sortByTitle= () => {
        this.setState({ sortAscTitle: -this.state.sortAscTitle, lastSortUpdate: "title" });
    }

    render() {
        let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let moviesList = [
            { title: "Interstellar", rating: 9},
            { title: "Avengers", rating: 8},
            { title: "Shang Chi", rating: 8},
            { title: "A Quiet Place", rating: 7},
            { title: "Avengers Infinity War", rating: 8},
            { title: "Parasite", rating: 9},
            { title: "Eternals", rating: 7},
            { title: "Avengers End Game", rating: 9},
            { title: "Gone Girl", rating: 7}
        ];

        return (
            <div>
                <h5>Movies</h5>
                <Link to="../">Go back to Home</Link>

                { !this.state.removeFilter &&
                    <div>Filter by rating:
                    <select onChange={this.filterByRating}>
                        { ratings.map( rating => <option value={rating}>{rating}</option> ) }
                    </select>
                    </div>
                }

                <button onClick={this.removeFilter}>{this.state.removeFilter ? "Add filter" : "Remove filter"}</button>

                <button onClick={this.sortByRating}>Sort by rating</button>

                <button onClick={this.sortByTitle}>Sort by title</button>

                {
                    moviesList
                    .filter(e => this.state.removeFilter ? e : e.rating === this.state.filterRating)
                    .sort((a, b) => {
                        if (this.state.lastSortUpdate === "rating")
                            return a.rating < b.rating ? this.state.sortAscRating : -this.state.sortAscRating
                        else if (this.state.sortAscTitle === -1)
                            return a.title.localeCompare(b.title)
                        else return b.title.localeCompare(a.title)
                    })
                    .map(e => 
                        <MoviePanel movieTitle={e.title} rating={e.rating} />
                    )
                }
            </div>
        );
    }
}

export default Movies;