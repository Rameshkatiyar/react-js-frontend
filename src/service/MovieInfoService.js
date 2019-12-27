const getMovieInfo = (movieName) => {
    return fetch('http://localhost:8080/movie?movieName='+movieName, {method: 'GET'})
        .then(response => {
            // console.log(response);
            return response.json();
        });
}

export {getMovieInfo};