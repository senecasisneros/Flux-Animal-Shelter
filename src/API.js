import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllAnimals() {
    axios.get('/api/animals')
    .then(res => res.data)
    .then(ServerActions.receiveAnimals)
    .catch(console.error);
  },

  createAnimal(animal) {
    axios.post('/api/animals', animal)
    .then(res => res.data)
    .then(ServerActions.createAnimal)
    .catch(console.error);
  },

  deleteAnimal(id) {
    axios.delete(`/api/animals/${id}`)
    .then(res => res.data)
    .then(ServerActions.deleteAnimal(id))
    .catch(console.error);
  },

///////////////////////////////////////////////////////
  getAllOwners() {
    axios.get('/api/owners')
    .then(res => res.data)
    .then(ServerActions.receiveOwners)
    .catch(console.error);
  },

  createOwner(owner) {
    axios.post('/api/owners', owner)
    .then(res => res.data)
    .then(ServerActions.createOwner)
    .catch(console.error);
  },

  deleteOwner(id) {
    axios.delete(`/api/owners/${id}`)
    .then(res => res.data)
    .then(ServerActions.deleteOwner(id))
    .catch(console.error);
  },



  getOneAnimal(id) {
    axios.get('/api/animals/:id')
    .then(res => res.data)
    .then(ServerActions.getOneAnimal)
    .catch(console.error)
  },
  getOneScraper(obj) {
    axios.post('/api/scraper', obj)
    .then(res => res.data)
    .then(ServerActions.getOneScraper)
    .catch(console.error)
  },
  getScrapers(obj) {
    axios.post('/api/scraper/links', obj)
    .then(res => res.data)
    .then(ServerActions.getScrapers)
    .catch(console.error)
  }
}

export default API;
