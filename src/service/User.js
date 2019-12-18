const getUserInfo = () => {
    return fetch('http://localhost:8080/user', {method: 'GET'})
        .then(response => {
            console.log(response);
            return response.json();
        });
}

export {getUserInfo};