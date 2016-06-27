import AppDispatcher from '../dispatcher/AppDispatcher';
import CounterConstants from '../constants/constants';

const CounterActions = {

  increment() {
    AppDispatcher.handleViewAction({
      actionType: CounterConstants.INCREMENT
    });
  },

  decrement() {
    AppDispatcher.handleViewAction({
      actionType: CounterConstants.DECREMENT
    });
  }

};

export default CounterActions;
