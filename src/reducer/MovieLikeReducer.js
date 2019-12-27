import {LikeMovieAction} from "../action/LikeMovieAction";

const initialState = {
    like: 0,
    dislike: 0
}

const movieLikeReducer = (state = initialState, action) => {
    const prevState = {...state};

    if (action.type === LikeMovieAction.LIKE){
        prevState.like++;
    }
    if (action.type === LikeMovieAction.DISLIKE){
        prevState.dislike++;
    }

    return prevState;
};

export default movieLikeReducer;