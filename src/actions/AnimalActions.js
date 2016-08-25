import API from '../API'

console.log('AnimalActions')

const AnimalActions = {
  getAllAnimals: API.getAllAnimals,

  createAnimal(animal) {
    API.createAnimal(animal);
  },



  getOneAnimals(id) {
    API.getOneAnimals(id);
  },
  deleteAnimal(id) {
    API.deleteAnimal(id);
  },
  getOneScraper(obj) {
    API.getOneScraper(obj);
  },
  getScrapers(obj) {
    API.getScrapers(obj);
  }
}

export default AnimalActions
