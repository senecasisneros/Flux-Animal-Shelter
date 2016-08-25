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
  }

  componentDidMount() {
    AnimalActions.getAllAnimals();
    AnimalStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({animals: AnimalStore.getAll()});
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



//     let { animals } = this.props;
//     animals = this.props.animals ? this.props.animals.map(animal => {
//
//       return (
//         <Animal key={animal._id} animal={animal} />
//       )
//   })
//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Animal name</th>
//             <th>Type of animal</th>
//             <th>Age of animal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {animal}
//         </tbody>
//       </table>
//     )
//   }
// }



// onDelete={onDelete} onEdit={onEdit}






// onDelete={onDelete} onEdit={onEdit}
