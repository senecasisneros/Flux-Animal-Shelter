import React, { Component } from 'react'
import AnimalActions from '../actions/AnimalActions'
import { browserHistory } from 'react-router';


export default class AddAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      age:  '',
      image:  ''

    }

    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeTaskInput(event) {
    let animal = event.target.value;
    this.setState({ animal })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('click')
    let { name, type, age, image } = this.state;

    AnimalActions.createAnimal({ name, type, age, image });
    browserHistory.push('/AnimalDisplay')
    this.setState({
      name: '',
      type: '',
      age: '',
      image: ''
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="animalName">Animal Name:</label>
          <input type="text"
                 className="form-control"
                 id="animalName"
                 placeholder="Animal Name"
                 value={this.state.name}
                 onChange={event => this.setState({name: event.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="animalType">Type of Animal:</label>
          <input type="text"
                 className="form-control"
                 id="typeAnimal"
                 placeholder="Type of animal"
                 value={this.state.type}
                 onChange={event => this.setState({type: event.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="animalAge">Age:</label>
          <input type="number"
                 className="form-control"
                 id="animalAge"
                 placeholder="Age of the animal"
                 value={this.state.age}
                 onChange={event => this.setState({age: event.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="animalImage">Age:</label>
          <input type="text"
                 className="form-control"
                 id="animalImage"
                 placeholder="Animal Image"
                 value={this.state.image}
                 onChange={event => this.setState({image: event.target.value})}
                 />
        </div>
        <button className="btn btn-default" onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}








////////// Code from Todo app /////////
    //     let { animal } = this.state;
    //
    //     return (
    //       <div>
    //         <form onSubmit={this.submit}>
    //           <div className="form-group">
    //             <label>Animal</label>
    //             <input type="text"
    //                    className="form-control"
    //                    placeholder="animal"
    //                    value={animal}
    //                    onChange={this.changeTaskInput}/>
    //           </div>
    //
    //           <button type="submit" className="btn btn-default">Submit</button>
    //         </form>
    //       </div>
    //     )
    //   }
    // }
