{/* <td>
<button className='btn btn-sm btn-primay' onClick={() => this.edit(animal)}>{this.state.editing ? 'Confirm' : 'Edit'}</button>
<button className='btn btn-sm btn-primary' onClick={() => onDelete(animal)}>Delete</button>
</td> */}




/////////////////////////////


// import React, { Component } from 'react';
//
// export default class Animal extends Component {
//
//   console.log('Animal')
//
//   constructor(props){
//     super(props);
//     this.state = {
//       name: this.props.animals.name,
//       type: this.props.animal.type,
//       age: this.props.animal.age,
//       image: this.props.animal.image,
//       editing: false
//     }
//   }
//
//   edit(animal) {
//     this.setState({editing: !this.state.editing});
//     console.log('this is in Animal component, animal:', animal);
//     let updatedAnimal = {
//       _id: this.props.animal._id,
//       name: this.state.name,
//       type: this.state.type,
//       age: this.state.age,
//       age: this.state.image
//
//     };
//     this.props.onEdit(updatedAnimal);
//   }
//
//   render() {
//     let { animal, onDelete, onEdit } = this.props;
//     let { name, type, age } = this.state;
//
//     let name = this.state.editing ? <input value={this.state.name} onChange={ event=> this.setState({ name: vent.target.value }) }/> : this.state.name;
//
//     let type = this.state.editing ? <input value={this.state.type} onChange={ event => this.setState({ type: event.target.value }) }/> : this.state.type;
//
//     let age = this.state.editing ? <input value={this.state.age} onChange={ event => this.setState({ age: event.target.value }) }/> : this.state.age;
//
//     let age = this.state.editing ? <input value={this.state.image} onChange={ event => this.setState({ image: event.target.value }) }/> : this.state.image;
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{type}</td>
//         <td>{age}</td>
//         <td>{image}</td>
//         <td>
//           <button className='btn btn-sm btn-primay' onClick={() => this.edit(animal)}>{this.state.editing ? 'Confirm' : 'Edit'}</button>
//         </td>
//         <td>
//           <button className='btn btn-sm btn-primary' onClick={() => onDelete(animal)}>Delete</button>
//         </td>
//       </tr>
//
//     )
//   }
// };

// import React, { Component } from 'react';
//
// export default class Animal extends Component {
//
//   constructor(){
//     super();
//     this.state = {
//       name: this.props.animals.name,
//       type: this.props.animal.type,
//       age: this.props.animal.age,
//       editing: false
//     }
//   }
//
//   edit(animal) {
//     this.setState({editing: !this.state.editing});
//     console.log('this is in Animal compontent, animal:', animal);
//     let updatedAnimal = {
//       _id: this.props.animal._id,
//       name: this.state.name,
//       type: this.state.type,
//       age: this.state.age
//
//     };
//     this.props.onEdit(updatedAnimal);
//   }
//
//   render() {
//     let { animal, onDelete, onEdit } = this.props;
//     let { name, type, age } = this.state;
//
//     let name = this.state.editing ?
//                   <input value={this.state.name} onChange={ event=> this.setState({ name: vent.target.value }) }/> :
//                   this.state.name;
//     let type = this.state.editing ?
//                   <input value={this.state.type} onChange={ event => this.setState({ type: event.target.value }) }/> :
//                   this.state.type;
//     let age = this.state.editing ?
//                   <input value={this.state.age} onChange={ event => this.setState({ age: event.target.value }) }/> :
//                   this.state.age;
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{type}</td>
//         <td>{age}</td>
//          <td>
//             <button className='btn btn-sm btn-primay' onClick={() => this.edit(animal)}>{this.state.editing ? 'Confirm' : 'Edit'}</button>
//         </td>
//           <td>
//             <button className='btn btn-sm btn-primary' onClick={() => onDelete(animal)}>Delete</button>
//         </td>
//       </tr>
//     )
//   }
//
// };



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
