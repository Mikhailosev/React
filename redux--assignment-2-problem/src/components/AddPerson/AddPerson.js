import './AddPerson.css';

import React, { Component } from 'react';

class AddPerson extends Component {
    state={
        name:'',
        age:null
    }
    nameChangedHandler=(event)=>{
        this.setState({name:event.target.value})
    }
    ageChangedHandler=(event)=>{
        this.setState({age:event.target.value})
    }
    render() {
        return (
            <div className="AddPerson">
            <input value={this.state.name}onChange={this.nameChangedHandler} type="text" placeholder="Name"/>
            <input value={this.state.age} onChange={this.ageChangedHandler} type="number" placeholder="Age"/>
            <button onClick={()=>this.props.personAdded(this.state.age, this.state.name)}>Add Person</button>
        </div>
        );
    }
}

export default AddPerson;