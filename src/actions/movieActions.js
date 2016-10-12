import $ from 'jquery';
import Alert from 'react-s-alert';

const apiUrl = "http://gooddogs-api.azurewebsites.net/tables/movieFavorites";

export function loadMoviesSuccess(movies) {
    debugger;
    return { type: 'MOVIES_LOADED', movies };
}

export function saveMovieSuccess(movie) {
    debugger;
    return { type: 'MOVIE_SAVED', movie };
}

export function removeMovieSuccess(movie) {
    debugger;
    return { type: 'MOVIE_REMOVED', movie };
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
            userid: 'demo-user',
            note: ''
        }
        $.ajax({
            type : "POST",
            url : apiUrl,
            data: JSON.stringify(obj),
            contentType: "application/json",
            success : function(data) {
                Alert.success(data.title + ' added', {
                    position: 'top-right',
                    effect: 'bouncyflip',
                    timeout: 3000
                });
                dispatch(saveMovieSuccess(data));
            }
        });
    }
}

export function removeMovie(movie) {
    debugger;
    return function(dispatch) {
        $.ajax({
            type : "DELETE",
            url : apiUrl + '/' + movie.id,
            contentType: "application/json",
            success : function(data) {
                Alert.success(data.title + ' removed', {
                    position: 'top-right',
                    effect: 'bouncyflip',
                    timeout: 3000
                });
                dispatch(removeMovieSuccess(data));
            }
        });
    }
}