import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import MoviePanel from './templates/moviePanel';
import { ratings, moviesList, initialState, movieReducer } from '../reducers/movieReducer';


function Movies() {
    
    const [state, dispatch] = useReducer(movieReducer, initialState);

    function filterOrSort(e) {
        dispatch( { type: e.target.id, data: { filterRating: parseInt(e.target.value) } } );
    }

    return (
        <div>
            <h5>Movies</h5>
            <Link to="../">Go back to Home</Link>

            { !state.removeFilter &&
                <div>Filter by rating:
                <select id="FILTER_BY_RATING" onChange={ filterOrSort }>
                    { ratings.map( rating => <option value={rating}>{rating}</option> ) }
                </select>
                </div>
            }

            <button id="REMOVE_FILTER" onClick={ filterOrSort }>{state.removeFilter ? "Add filter" : "Remove filter"}</button>

            <button id="SORT_BY_RATING" onClick={ filterOrSort }>Sort by rating</button>

            <button id="SORT_BY_TITLE" onClick={ filterOrSort }>Sort by title</button>

            {
                moviesList
                .filter(e => state.removeFilter ? e : e.rating === state.filterRating)
                .sort((a, b) => {
                    if (state.lastSortUpdate === "rating")
                        return a.rating < b.rating ? state.sortAscRating : -state.sortAscRating
                    else if (state.sortAscTitle === -1)
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

export default Movies;