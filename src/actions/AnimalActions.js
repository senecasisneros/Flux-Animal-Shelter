import API from '../API'

console.log('AnimalActions')

const AnimalActions = {
  getAllAnimals: API.getAllAnimals,

  createAnimal(animal) {
    API.createAnimal(animal);
  },

  deleteAnimal(id) {
    API.deleteAnimal(id);
  },


  getOneAnimals(id) {
    API.getOneAnimals(id);
  },


  getOneScraper(obj) {
    API.getOneScraper(obj);
  },
  getScrapers(obj) {
    API.getScrapers(obj);
  }
}

export default AnimalActions
