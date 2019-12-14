import React from 'react';

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userlist: 'NA'
        }
    }

    getuserlist = () => {
        fetch('http://localhost:8080/user', {method: 'GET'})
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(result => {
                this.setState({userlist: result.firstName});
            });
    }

    render() {
        return (
            <div>
                User List: {this.state.userlist}
                <br/>
                <button onClick={this.getuserlist}>Get User List</button>
            </div>
        );
    }
}

export default UserList;