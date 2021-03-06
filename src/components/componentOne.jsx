import React from 'react';
import {Card, Button, Icon, Label, List, Loader, Dimmer} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {likeMovie, dislikeMovie} from "../action/LikeMovieAction";

class ComponentOne extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Content header='Component 1' />
                    <List selection>
                        <List.Item>
                            <Label color='red' horizontal>
                                Movie Name
                            </Label>
                            {this.props.name}
                        </List.Item>
                        <List.Item>
                            <Label color='purple' horizontal>
                                Type
                            </Label>
                            {this.props.movieType}
                        </List.Item>
                        <List.Item>
                            <Label color='orange' horizontal>
                                Director
                            </Label>
                            {this.props.director}
                        </List.Item>
                        <List.Item>
                            <Label color='green' horizontal>
                                Year
                            </Label>
                            {this.props.year}
                        </List.Item>
                    </List>

                    <Card.Content extra>
                        <Button as='div' labelPosition='right'>
                            <Button icon onClick={this.props.likeCount}>
                                <Icon name='thumbs up outline' />
                            </Button>
                            <Label as='a' basic pointing='left'>
                                {this.props.like}
                            </Label>
                        </Button>
                        <Button as='div' labelPosition='left'>
                            <Label as='a' basic pointing='right'>
                                {this.props.dislike}
                            </Label>
                            <Button icon onClick={this.props.dislikeCount}>
                                <Icon name='thumbs down outline' />
                            </Button>
                        </Button>
                    </Card.Content>
                    <Dimmer active={this.props.loading} inverted><Loader size='massive'>Loading...</Loader></Dimmer>
                </Card>
            </div>
        );
    }
}

//Subscribe To Store (State)
const mapStateToProps = (state) => {
    return {
        name: state.SearchMovieReducer.name,
        movieType: state.SearchMovieReducer.movieType,
        director: state.SearchMovieReducer.director,
        year: state.SearchMovieReducer.year,

        loading: state.SearchMovieReducer.loading,

        like: state.MovieLikeReducer.like,
        dislike: state.MovieLikeReducer.dislike
    }
}

//Dispatch To Store (Reducer)
const mapDispatchToProps = (dispatch) => {
    return {
        likeCount: () => dispatch(likeMovie),
        dislikeCount: () => dispatch(dislikeMovie)
    }
};

export default (connect(mapStateToProps, mapDispatchToProps)) (ComponentOne);