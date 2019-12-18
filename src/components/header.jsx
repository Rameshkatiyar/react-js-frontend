import React from 'react';
import { Menu } from 'semantic-ui-react'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = { activeItem: 'home' }

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <div>
                <Menu inverted>
                    <Menu.Item
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={this.state.activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={this.state.activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                User {this.props.user}
            </div>
        );
    }
}
export default Header;