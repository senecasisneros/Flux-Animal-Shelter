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




  receiveOneAnimal(animal) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_ANIMAL',
      id
    })
  },
  getOneScraper(obj) {
    AppDispatcher.dispatch({
      type: "GET_ONE_SCRAPER",
      obj
    })
  },
  getScrapers(obj) {
    AppDispatcher.dispatch({
      type: "GET_SCRAPERS",
      obj
    })
  }
}

export default ServerActions
