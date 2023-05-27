
const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const moviesList = [
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

const initialState = {
    filterRating: 1,
    sortAscRating: -1,
    sortAscTitle: -1,
    lastSortUpdate: "title",
    removeFilter: true
}

function movieReducer(state, action) {

    switch(action.type) {
        case "FILTER_BY_RATING":
            return { ...state, filterRating: action.data.filterRating, removeFilter: false };
        case "REMOVE_FILTER":
            return { ...state, removeFilter: !state.removeFilter };
        case "SORT_BY_RATING":
            return { ...state, sortAscRating: -state.sortAscRating, lastSortUpdate: "rating" };
        case "SORT_BY_TITLE":
            return { ...state, sortAscTitle: -state.sortAscTitle, lastSortUpdate: "title" };
        default:
            return state;
    }
}

export { ratings, moviesList, initialState, movieReducer };