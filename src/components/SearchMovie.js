import React from 'react';
import {Button, Form} from "semantic-ui-react";
import {connect} from 'react-redux';
import {fetchMovieDetails} from "../action/SearchMovieAction";
// import {getMovieInfo} from '../service/MovieInfoService'

class SearchMovie extends React.Component{
    state = {
        movieName: ''
    }

    updateInputValue(evt) {
        this.setState({
            movieName: evt.target.value
        });
    }

    onSubmit(){
        this.props.fetchMovieDetails(this.state.movieName);
        // getMovieInfo(this.state.movieName).then(
        //     data => {
        //         this.props.showMovieDetails(data);
        //     }
        // );
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Movie Name</label>
                        <input placeholder='Type Movie Name'
                               value={this.state.inputValue}
                               onChange={evt => this.updateInputValue(evt)}/>
                    </Form.Field>
                    <Button secondary onClick={this.onSubmit.bind(this)}>Get Movie Details</Button>
                </Form>
            </div>
        );
    }
}

//Subscribe To Store (State)
const mapStateToProps = (store) => {
    return {
        movieDetails: store.SearchMovieReducer.movieDetails
    }
};

//Dispatch To Store (Reducer)
const mapDispachToProps = (dispatch) => {
    return {
        fetchMovieDetails: (movieDetails) => dispatch(fetchMovieDetails(movieDetails)),
        // showMovieDetails: (movieDetails) => dispatch(showMovieDetails(movieDetails))
    }
};

export default (connect(mapStateToProps, mapDispachToProps)) (SearchMovie);