import React, { Component } from 'react';

class UserOutput extends Component {
    render() {
        const props=this.props
        return (
            <div>
               <p>Some Content {props.username}</p>
               <p>Some Content {props.username}</p>
            </div>
        );
    }
}

export default UserOutput;