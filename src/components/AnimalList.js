import React, { Component } from 'react'
import AnimalStore from '../stores/AnimalStore'
import AnimalActions from '../actions/AnimalActions'
import AddAnimal from '../components/AddAnimal'

console.log('AnimalList')

export default class AnimalList extends Component {
  constructor() {
    super();

    this.state = {
      animals: AnimalStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.addAnimal = this.addAnimal.bind(this);
  }

  componentDidMount() {
    console.log('CDM')
    AnimalActions.getAllAnimals();
    AnimalStore.startListening(this._onChange);

  }

  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      animals: AnimalStore.getAll()
    });
  }
  addAnimal(animal) {
    console.log('AnimalList-addAnimal:', animal)
    this.setState({animals: this.state.animals.concat(animal)});
  }
  onDelete(animal) {
  AnimalActions.deleteAnimal(animal);
}

onEdit(animal) {
  AnimalActions.editAnimal(animal);
}

  render() {


return (
  <div className="text-center row">
        <h1>Animals</h1>

        <div>
          <AddAnimal addAnimal={this.addAnimal} />
        </div>

        <div>
          {this.state.animals.length ?  <AnimalDisplay animals={this.state.animals} onDelete={this.onDelete} onEdit={this.onEdit} /> : <h1>Loading...</h1>}
        </div>

      </div>
    )
  }
}
