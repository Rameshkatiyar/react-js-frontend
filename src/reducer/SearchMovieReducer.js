import {SearchMovieAction} from "../action/SearchMovieAction";

const initialState = {
    name: '',
    movieType: '',
    director: '',
    year: '',
    loading: false
}

const searchMovieReducer = (state = initialState, action) => {
    const prevState = {...state};

    if (action.type === SearchMovieAction.SHOW_MOVIE_DATA){
        prevState.name = action.name;
        prevState.movieType = action.movieType;
        prevState.director = action.director;
        prevState.year = action.year;
        prevState.loading = false;
    }
    if (action.type === SearchMovieAction.START_DATA_FETCHING){
        prevState.loading = true;
    }

    return prevState;
};

export default searchMovieReducer;