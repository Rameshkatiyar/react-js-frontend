import React from 'react';

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>
                    Header is here! {this.props.user}
                </h1>
            </div>
        );
    }
}
export default Header;