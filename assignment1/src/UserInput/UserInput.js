import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        const props=this.props
        return (
            <div>
                <input value={props.username} onChange={props.typing} type="text"></input>
            </div>
        );
    }
}

export default UserInput;