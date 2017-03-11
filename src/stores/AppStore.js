// state and logic
// stores update, shows events of states being changed

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _contacts = [];

class AppStoreClass extends EventEmitter{
  // when store changes, it emits an event
  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  // listener to listen
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }

  // remove listener
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

  // return the state
  getContacts(){
    return _contacts;
  }
}

const AppStore = new AppStoreClass();

// handle all actions with dispatchToken
AppStore.dispatchToken = AppDispatcher.register(action => {
  // test action type that comes in
  switch(action.actionType){

  }
});

export default AppStore;
