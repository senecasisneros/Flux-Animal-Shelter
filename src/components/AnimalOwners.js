import React, { Component } from 'react';
import AnimalStore from '../stores/AnimalStore'
import {Table} from 'react-bootstrap'
import AnimalActions from '../actions/AnimalActions';


export default class AnimalOwners extends Component {
  constructor(){
    super();
    this.state = {
      animals: ''
    }

    this._onChange = this._onChange.bind(this);
    // this.deleteOwner = this.deleteOwner.bind(this);
  }

  componentDidMount() {
    // AnimalActions.getAnimalOwners(this.state.id);
    AnimalActions.getAnimalOwners();
    AnimalStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      animals: AnimalStore.getAnimalOwners()
      // id: AnimalStore.getAnimalId()
    });
  }

  // deleteOwner(id){
  //   AnimalActions.deleteOwner(id);
  //   }
  render() {
    if (this.state.animals.length !== 0) {
          let trs = this.state.animals.map((val ,index) => {

        return (
          <tr key={index + 1}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.phoneNumber}</td>
            <td>
          <button type="button" className="btn btn-danger btn-xs" onClick={this.deleteOwner.bind(null, val._id)}>Delete</button>
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
                <th>Email</th>
                <th>Phone</th>
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
