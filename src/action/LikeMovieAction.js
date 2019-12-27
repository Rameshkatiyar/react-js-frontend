//Create constant
const LikeMovieAction = {
    LIKE: 'LIKE',
    DISLIKE: 'DISLIKE'
};


//Create Object
const likeMovie = {
    type: LikeMovieAction.LIKE,
};

const dislikeMovie ={
    type: LikeMovieAction.DISLIKE,
};

export {likeMovie, dislikeMovie, LikeMovieAction};