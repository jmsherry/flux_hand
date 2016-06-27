import AppDispatcher from '../dispatcher/AppDispatcher';
import CounterConstants from '../constants/constants';

const CounterActions = {

  addTodo(todo) {
    AppDispatcher.handleViewAction({
      actionType: CounterConstants.ADD_TODO,
      todo
    });
  },

  removeTodo(index) {
    AppDispatcher.handleViewAction({
      actionType: CounterConstants.REMOVE_TODO,
      index
    });
  }

};

export default CounterActions;
