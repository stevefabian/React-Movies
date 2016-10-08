import $ from 'jquery';

const apiUrl = "http://gooddogs-api.azurewebsites.net/tables/movieFavorites";

export function loadMoviesSuccess(movies) {
    debugger;
    return { type: 'MOVIES_LOADED', movies };
}

export function saveMovieSuccess(movie) {
    debugger;
    return { type: 'MOVIE_SAVED', movie };
}

export function loadMovies() {
    debugger;
    return function(dispatch) {
        $.get(apiUrl, function( data ) {
            debugger;
            dispatch(loadMoviesSuccess(data)
            );
        });
    }
}

export function saveMovie(movie) {
    debugger;
    return function(dispatch) {
        var obj = {
            title: movie.title,
            poster: movie.poster,
            userid: 'fabians',
            note: ''
        }
        $.ajax({
            type : "POST",
            url : apiUrl,
            data: JSON.stringify(obj),
            contentType: "application/json",
            success : function(data) {
                dispatch(saveMovieSuccess(data));
            }
        });
    }
}