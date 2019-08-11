import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import Radium from "radium";
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef=React.createRef()
  }
  static contextType = AuthContext;

  componentDidMount(){
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
    }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
          {this.context.authenticated ? <p>Authenticated!</p>
        :
        <p>Please LogIn</p>}
        <p key="!@#!#!#!AS" onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} years old!
        </p>
        <p key="!@#!#!#!AS2">{this.props.children}</p>
        <input
          key="!@#!#!#!AS3"
        // ref={(inputEl)=>{this.inputElement=inputEl}}
        ref={this.inputElementRef} 
         type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
