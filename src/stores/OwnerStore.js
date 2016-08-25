import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'


let _owner = [];

class OwnerStore extends EventEmitter {
  constructor() {
    super();

    this.getAllOwners = this.getAllOwners.bind(this);

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_OWNERS':
        _owner = action.owners;
        this.emit('CHANGE');
        break;

        case 'RECEIVE_ONE_OWNER':
        var { owner } = action;
        _owner.push(owner);
        this.emit('CHANGE');
        break;


        case 'CREATE_OWNER':
        var { owner } = action;

        // owner._id = uuid();
        // owner.createdAt = Date.now();

        _owner.push(owner);
        this.emit('CHANGE');
        break;

        case 'DELETE_OWNER':
        var { id } = action;
        _owner = _owner.filter(i => i._id !== id);
        this.emit("CHANGE");
        break;

        case 'GET_ONE_SCRAPER':
        _ownerLyric =  action.obj;
        this.emit("CHANGE");
        break;

        case 'GET_SCRAPERS':
        _links =  action.obj;
        this.emit("CHANGE");
        break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllOwners() {
    return _owner;
  }
}

export default new OwnerStore();
