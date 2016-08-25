import AppDispatcher from '../AppDispatcher'

console.log('ServerActions')

const ServerActions = {

  receiveAnimals(animals) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ANIMALS',
      animals
    })
  },
  createAnimal(animal) {
    AppDispatcher.dispatch({
      type: "CREATE_ANIMAL",
      animal
    })
  },
  deleteAnimal(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_ANIMAL',
      id
    })
  },

////////////////////////////////////

  receiveOwners(owners) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_OWNERS',
      owners
    })
  },
  createOwner(owner) {
    AppDispatcher.dispatch({
      type: "CREATE_OWNER",
      owner
    })
  },
  deleteOwner(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_OWNER',
      id
    })
  },

/////////////////////////////////


  // receiveOneAnimal(animal) {
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_ONE_ANIMAL',
  //     id
  //   })
  // },

  ///////////////////////////////
  getAnimalOwners(id) {
    AppDispatcher.dispatch({
      type: "GET_ANIMALOWNERS",
      id
    })
  },



  /////////////////////////////////
  // getScrapers(obj) {
  //   AppDispatcher.dispatch({
  //     type: "GET_SCRAPERS",
  //     obj
  //   })
  // }
}

export default ServerActions
