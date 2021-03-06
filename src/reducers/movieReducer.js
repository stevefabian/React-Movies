export default function movieReducer(state = [], action) {
    switch(action.type) {
        case 'MOVIE_SAVED':
        debugger;
            return [
                ...state,
                Object.assign({}, action.movie)
            ];
        case 'MOVIES_LOADED':
            return action.movies;
        case 'MOVIE_REMOVED':
            return [
                ...state.filter(movie => movie.title !== action.movie.title)
            ];
        default:
            return state;
    }
}