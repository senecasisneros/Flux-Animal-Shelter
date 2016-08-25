import React, { Component } from 'react';
import AnimalStore from '../stores/AnimalStore'
import {Table} from 'react-bootstrap'


import Animal from './Animal';
import AnimalActions from '../actions/AnimalActions';

export default class AnimalDisplay extends Component {
  constructor(){
    super();
    this.state = {
      animals: ''
    }
    // this.state = {
    //   animals: AnimalStore.getAll()
    // }

    this._onChange = this._onChange.bind(this);
    this.deleteAnimal = this.deleteAnimal.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllAnimals();
    AnimalStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ animals: AnimalStore.getAll() });
  }

  deleteAnimal(id){
    AnimalActions.deleteAnimal(id);
    }
  render() {
    if (this.state.animals.length !== 0) {
          let trs = this.state.animals.map((val ,index) => {

        return (
          <tr key={index + 1}>
            <td>{val.name}</td>
            <td>{val.type}</td>
            <td>{val.age}</td>

            <td>
            <img width="250"  height="250"src={val.image}/>
            </td>
            <td>
          <button type="button" className="btn btn-danger btn-xs" onClick={this.deleteAnimal.bind(null, val._id)}>Delete</button>
          </td>
          </tr>
        )
      });
      return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Age</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
                {trs}
            </tbody>
          </Table>
        </div>
      )
    }
    else return <div></div>
    }
}
