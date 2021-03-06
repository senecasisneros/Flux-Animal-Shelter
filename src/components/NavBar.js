import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // let animals = this.props.animal
    // let link = '/AnimalOwners/' + animals.id;
    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">

      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/">Home</Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul className="nav navbar-nav navbar-right">
      <li><Link to="AnimalDisplay">AnimalDisplay</Link></li>
      <li><Link to="AddAnimal">AddAnimal</Link></li>
      <li><Link to="Owners">Owners</Link></li>
      <li><Link to="AddOwners">AddOwners</Link></li>
      {/* <li><Link to={link}>AnimalOwners</Link></li> */}
      <li><Link to="AnimalOwners">AnimalOwners</Link></li>
      </ul>
      </div>
      </div>
      </nav>
    )
  }
}
