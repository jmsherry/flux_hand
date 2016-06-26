import React,{Component} from 'react';
import CounterConstants from './../constants/constants';
import AppDispatcher from './../dispatcher/AppDispatcher';

class Counter extends Component {
  render(){
    console.log('here', AppDispatcher);
    return (
      <div className="controls">
        <button onClick={() => AppDispatcher.handleViewAction( {actionType: CounterConstants.INCREMENT})}>+</button>
        <button onClick={() => AppDispatcher.handleViewAction( {actionType: CounterConstants.DECREMENT})}>-</button>
      </div>
    )
  }
}

export default Counter;
