import React, { Component } from 'react';
// import AnimalList from './AnimalList'
// import AddAnimal from './AddAnimal'
import NavBar from './NavBar'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}
