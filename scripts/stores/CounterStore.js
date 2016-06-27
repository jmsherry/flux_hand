import Dispatcher from 'Flux';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CounterConstants from '../constants/constants';
import { EventEmitter } from 'events';
import assign from 'object-assign';

let _todos = []; // collection of todo items

function addTodo(todo) {
  _todos.push(todo);
}

function removeTodo(i) {
  console.log('removing', i);
   _todos.splice(i, 1)
}

let CounterStore = assign({}, EventEmitter.prototype, {

  getTodos() {
    return _todos;
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
    let action = payload.action;

    switch(action.actionType) {
      case CounterConstants.ADD_TODO:
          console.log('add', _todos);
          addTodo(action.todo);
          console.log(_todos);
          CounterStore.emitChange();
        break;

      case CounterConstants.REMOVE_TODO:
      console.log('remove', _todos);
        removeTodo(action.index);
        console.log(_todos);
        CounterStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

export default CounterStore;
