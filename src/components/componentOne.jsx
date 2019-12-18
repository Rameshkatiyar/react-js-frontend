import React from 'react';
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux';

class ComponentOne extends React.Component {
    //
    // state = {
    //   count: 0
    // };

    render() {
        return (
            <div>
                <Card>
                    <Card.Content header='Component 1' />
                    <Card.Content description={this.props.count} />
                </Card>
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

export default (connect(mapStateToProps)) (ComponentOne);