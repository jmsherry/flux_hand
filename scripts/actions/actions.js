import AppDispatcher from '../dispatcher/AppDispatcher';
var CounterConstants = require('../constants/constants');

const CounterActions = {

  /**
   * @param  {string} text
   */
  increment() {
    AppDispatcher.handleViewAction({
      actionType: CounterConstants.INCREMENT
    });
  },

  decrement() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.DECREMENT
    });
  }

};

export default CounterActions;
