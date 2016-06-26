import { Dispatcher } from 'Flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  console.log('in', arguments);
  this.dispatch({
    source: 'VIEW_ACTION',
    action
  });
}

export default AppDispatcher;
