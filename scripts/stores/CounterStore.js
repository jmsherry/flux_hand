import Dispatcher from 'Flux';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CounterConstants from '../constants/constants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

console.log(' Dispatcher',  Dispatcher);
console.log(' AppDispatcher',  AppDispatcher);
let _count = 5; // collection of todo items

function increment() {
  _count +=1;
}

function decrement() {
  _count -=1;
}

let CounterStore = assign({}, EventEmitter.prototype, {

  getCount() {
    return _count;
  },

  emitChange() {
    this.emit(CounterConstants.CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CounterConstants.CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CounterConstants.CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    console.log('blah', arguments);
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case CounterConstants.INCREMENT:
          console.log('inc', _count);
          increment();
          console.log(_count);
          CounterStore.emitChange();
        break;

      case CounterConstants.DECREMENT:
      console.log('dec', _count);
        decrement();
        console.log(_count);
        CounterStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

export default CounterStore;
