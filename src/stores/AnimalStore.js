import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

console.log('AnimalStore');

let _animal = [];
let _animalOwners;

class AnimalStore extends EventEmitter {
  constructor() {
    super();

    this.getAll = this.getAll.bind(this);

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ANIMALS':
        _animal = action.animals;
        this.emit('CHANGE');
        break;

        case 'RECEIVE_ONE_ANIMAL':
        var { animal } = action;
        _animal.push(animal);
        this.emit('CHANGE');
        break;


        case 'CREATE_ANIMAL':
        var { animal } = action;

        // animal._id = uuid();
        // animal.createdAt = Date.now();

        _animal.push(animal);
        this.emit('CHANGE');
        break;

        case 'DELETE_ANIMAL':
        var { id } = action;
        _animal = _animal.filter(i => i._id !== id);
        this.emit("CHANGE");
        break;



        case 'GET_ANIMALOWNERS':
        var { id } = action;
        // _animalOwners = action.obj;
        this.emit("CHANGE");
        break;


        // case 'GET_ONE_SCRAPER':
        // _animalLyric =  action.obj;
        // this.emit("CHANGE");
        // break;
        //
        // case 'GET_SCRAPERS':
        // _links =  action.obj;
        // this.emit("CHANGE");
        // break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    console.log('_animal:', _animal)
    return _animal;
  }
  getAnimalOwners() {
    return _animalOwners;
  }
  // getAnimalId() {
  //   return _animalOwners.id;
  // }

}

export default new AnimalStore();
