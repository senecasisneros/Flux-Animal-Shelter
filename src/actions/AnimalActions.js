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

//////////////////////////

  getAllOwners: API.getAllOwners,

  createOwner(owner) {
    API.createOwner(owner);
  },
  deleteOwner(id) {
    API.deleteOwner(id);
  },

///////////////////////////////


getAnimalOwners(id) {
  console.log('actionsid:', id)
  API.getAnimalOwners(id);
},


////////////////////////////////////
  // getOneAnimals(id) {
  //   API.getOneAnimals(id);
  // },
  //
  //
  // getOneScraper(obj) {
  //   API.getOneScraper(obj);
  // },
  // getScrapers(obj) {
  //   API.getScrapers(obj);
  // }
}

export default AnimalActions
