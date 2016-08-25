import React, { Component } from 'react';

export default class Animal extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.animals.name,
      type: this.props.animal.type,
      age: this.props.animal.age,
      editing: false
    }
  }

  edit(animal) {
    this.setState({editing: !this.state.editing});
    console.log('this is in Animal compontent, animal:', animal);
    let updatedAnimal = {
      _id: this.props.animal._id,
      name: this.state.name,
      type: this.state.type,
      age: this.state.age

    };
    this.props.onEdit(updatedAnimal);
  }

  render() {
    let { animal, onDelete, onEdit } = this.props;
    let name = this.state.editing ?
                  <input value={this.state.name} onChange={ event=> this.setState({ name: vent.target.value }) }/> :
                  this.state.name;
    let type = this.state.editing ?
                  <input value={this.state.type} onChange={ event => this.setState({ type: event.target.value }) }/> :
                  this.state.type;
    let age = this.state.editing ?
                  <input value={this.state.age} onChange={ event => this.setState({ age: event.target.value }) }/> :
                  this.state.age;
    return (
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td>{age}</td>
      </tr>
    )
  }

};
