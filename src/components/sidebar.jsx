import React from 'react';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            heading: "Counter: "
        }
    }

    buttonClick = () => {
       this.setState(
           { counter: this.state.counter + 1}
       );
    }

    render() {
        return (
            <div>
                Side Bar....! {this.state.heading} {this.state.counter}
                <br/>
                <button onClick={this.buttonClick}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Sidebar;