import React from 'react';
import { Card } from 'semantic-ui-react'
import {connect} from "react-redux";

class ComponentTwo extends React.Component {

    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <Card>
                    <Card.Content header='Component 2' />
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

export default (connect(mapStateToProps)) (ComponentTwo);