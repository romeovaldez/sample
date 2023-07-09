
const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const moviesList = [
    { title: "Interstellar", rating: 9, src: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},
    { title: "Avengers", rating: 8, src: "https://image.tmdb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg"},
    { title: "Shang Chi", rating: 8, src: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"},
    { title: "A Quiet Place", rating: 7, src: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg"},
    { title: "Avengers Infinity War", rating: 8, src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"},
    { title: "Parasite", rating: 9, src: "https://image.tmdb.org/t/p/original/5uz9Se5HBxxPdJY38rPfyWUyjDZ.jpg"},
    { title: "Eternals", rating: 7, src: "https://image.tmdb.org/t/p/original/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"},
    { title: "Avengers End Game", rating: 9, src: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"},
    { title: "Gone Girl", rating: 7, src: "https://image.tmdb.org/t/p/original/qymaJhucquUwjpb8oiqynMeXnID.jpg"}
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