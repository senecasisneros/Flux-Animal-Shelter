import React, { Component } from 'react'
import AnimalActions from '../actions/AnimalActions'
import { browserHistory } from 'react-router';


export default class AddOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone:  ''
    }

    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeTaskInput(event) {
    let owner = event.target.value;
    this.setState({ owner })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('click')
    let { name, email, phone } = this.state;

    AnimalActions.createOwner({ name, email, phone });
    browserHistory.push('/Owners')
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="ownerName">Name:</label>
          <input type="text"
                 className="form-control"
                 id="ownerName"
                 placeholder="Owner's Name"
                 value={this.state.name}
                 onChange={event => this.setState({name: event.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="ownerEmail">Email:</label>
          <input type="email"
                 className="form-control"
                 id="typeOwner"
                 placeholder="Owner's Email"
                 value={this.state.email}
                 onChange={event => this.setState({type: event.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="ownerPhoneNumber">Phone Number:</label>
          <input type="number"
                 className="form-control"
                 id="ownerphoneNumber"
                 placeholder="Owner's Phone Number"
                 value={this.state.phoneNumber}
                 onChange={event => this.setState({age: event.target.value})}
                 />
        </div>
        <button className="btn btn-default" onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}
