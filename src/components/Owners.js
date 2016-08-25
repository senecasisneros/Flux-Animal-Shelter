import React, { Component } from 'react';
import OwnerStore from '../stores/OwnerStore'
import {Table} from 'react-bootstrap'
import AnimalActions from '../actions/AnimalActions';


export default class Owners extends Component {
  constructor(){
    super();
    this.state = {
      owners: ''
    }
    this._onChange = this._onChange.bind(this);
    this.deleteOwner = this.deleteOwner.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllOwners();
    OwnerStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    OwnerStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ owners: OwnerStore.getAllOwners() });
  }

  deleteOwner(id){
    AnimalActions.deleteOwner(id);
    }
  render() {
    if (this.state.owners.length !== 0) {
          let trs = this.state.owners.map((val ,index) => {

        return (
          <tr key={index + 1}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.phoneNumber}</td>
            <td>{val.pet}</td>
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
                <th>Pet</th>
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
