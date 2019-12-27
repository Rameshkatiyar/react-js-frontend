import {getMovieInfo} from '../service/MovieInfoService'

//Create constant
const SearchMovieAction = {
    SHOW_MOVIE_DATA: 'SHOW_MOVIE_DATA'
};


//Create Object
const showMovieDetails = movieDetails => ({
    type: SearchMovieAction.SHOW_MOVIE_DATA,
    name: movieDetails.movieName,
    movieType: movieDetails.movieType,
    director: movieDetails.director,
    year: movieDetails.year,
});

const fetchMovieDetails = movieName => {
    return dispatch => {
        getMovieInfo(movieName).then(
            data => {
                dispatch(showMovieDetails(data));
            });
    };
};

export {showMovieDetails, fetchMovieDetails, SearchMovieAction};