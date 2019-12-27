import {getMovieInfo} from '../service/MovieInfoService'

//Create constant
const SearchMovieAction = {
    SHOW_MOVIE_DATA: 'SHOW_MOVIE_DATA',
    START_DATA_FETCHING: 'START_DATA_FETCHING'
};

//Action 1
const startDataLoading = {
    type: SearchMovieAction.START_DATA_FETCHING,
    loading: true
};

//Action 2
const showMovieDetails = movieDetails => ({
    type: SearchMovieAction.SHOW_MOVIE_DATA,
    name: movieDetails.movieName,
    movieType: movieDetails.movieType,
    director: movieDetails.director,
    year: movieDetails.year,
});


//THUNK Middleware
//Action, before going to reducer, it will come at this function then it will send the showMovieDetails action to reducer.
const fetchMovieDetails = movieName => {
    return dispatch => {
        dispatch(startDataLoading);
        getMovieInfo(movieName).then(
            data => {
                setTimeout(() => {
                        dispatch(showMovieDetails(data));
                    },1000);
            });
    };
};

export {showMovieDetails, fetchMovieDetails, SearchMovieAction};