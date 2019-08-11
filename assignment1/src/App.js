import React, { Component } from "react";
import UserInput from "../src/UserInput/UserInput";
import UserOutput from "../src/UserOutput/UserOutput";

class App extends Component {
  state = {
    names: [
      {
        username: "TEST@@@",
      },
    ],
  };
  manipulateState = e => {
    e += e;
    console.log(e);
  };
  userNameChanged = e => {
    this.setState({
      names: [
        {
          username: e.target.value,
        },
      ],
    });
  };
  render() {
    return (
      <div>
        Assignment 1
        <UserOutput username='Something' />
        <UserOutput username="Test2" />
        <UserOutput username={this.state.names[0].username} />
        <UserInput username={this.state.names[0].username} typing={this.userNameChanged}/>
      </div>
    );
  }
}

export default App;
