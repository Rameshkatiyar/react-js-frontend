import React from 'react';
import { Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {upCount, downCount} from "../action/CounterAction";

class Counter extends React.Component {

    // state = {
    //     count: 10
    // };

    // upCount = () => {
    //     this.setState({ count: this.state.count+1});
    // }
    // downCount = () => {
    //     this.setState({ count: this.state.count-1});
    // }

    render() {
        return (
            <div>
                <h1>Count: {this.props.count}</h1>
                <Button.Group>
                    <Button negative onClick={this.props.downCount}>Decrement</Button>
                    <Button.Or />
                    <Button positive onClick={this.props.upCount}>Increment</Button>
                </Button.Group>
            </div>
        );
    }
}

//Subscribe
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        upCount: () => dispatch(upCount),
        downCount: () => dispatch(downCount)
    }
};



export default (connect(mapStateToProps, mapDispachToProps)) (Counter);