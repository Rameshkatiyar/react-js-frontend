//Action Type Constant
const LikeMovieAction = {
    LIKE: 'LIKE',
    DISLIKE: 'DISLIKE'
};


//Create Action Object
const likeMovie = {
    type: LikeMovieAction.LIKE,
};

const dislikeMovie ={
    type: LikeMovieAction.DISLIKE,
};

export {likeMovie, dislikeMovie, LikeMovieAction};