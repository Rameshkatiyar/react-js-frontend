import React from 'react';
import {Button} from 'semantic-ui-react';
import {getUserInfo} from '../service/User'

class UserList extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         userlist: 'NA'
    //     }
    // }

    state = {
        userlist: 'NA'
    }

    getuserlist = () => {
        // fetch('http://localhost:8080/user', {method: 'GET'})
        //     .then(response => {
        //         console.log(response)
        //         return response.json();
        //     })
        //     .then(result => {
        //         this.setState({userlist: result.firstName});
        //     });

        getUserInfo().then(
            data => {
                this.setState({userlist: data.firstName});
            }
        );
    }

    render() {
        return (
            <div>
                User List: {this.state.userlist}
                <br/>
                <Button primary onClick={this.getuserlist}>Get User List</Button>
            </div>
        );
    }
}

export default UserList;