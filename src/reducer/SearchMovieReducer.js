import {SearchMovieAction} from "../action/SearchMovieAction";

const initialState = {
    name: '',
    movieType: '',
    director: '',
    year: '',
}

const searchMovieReducer = (state = initialState, action) => {
    const prevState = {...state};

    if (action.type === SearchMovieAction.SHOW_MOVIE_DATA){
        prevState.name = action.name;
        prevState.movieType = action.movieType;
        prevState.director = action.director;
        prevState.year = action.year;
    }
    return prevState;
};

export default searchMovieReducer;