import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _owner = [];

class OwnerStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_OWNERS':
        _owner = action.owner;
        this.emit('CHANGE');
        break;

        case 'RECEIVE_ONE_OWNER':
        var { owner } = action;
        _owner.push(owner);
        this.emit('CHANGE');
        break;


        case 'CREATE_OWNER':
        var { owner } = action;
        owner.createdAt = Date.now();
        _owner.push(owner);
        this.emit('CHANGE');
        break;

        case 'DELETE_OWNER':
        var { owner } = action;
        this._owners = this._owners.filter(i => i._id !== owner._id);
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

  getAll() {
    return _owner;
  }
}

export default new OwnerStore();
