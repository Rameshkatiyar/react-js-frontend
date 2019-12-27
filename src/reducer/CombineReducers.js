import { combineReducers } from 'redux';
import MovieLikeReducer from './MovieLikeReducer';
import SearchMovieReducer from './SearchMovieReducer';

export default combineReducers({
    MovieLikeReducer,
    SearchMovieReducer
});
