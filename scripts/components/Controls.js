import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CounterConstants from './../constants/constants';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CounterActions from './../actions/actions';

class Controls extends Component {
  render(){
    console.log('here', AppDispatcher);
    return (
      <div className="controls">
        <button onClick={CounterActions.increment}>+</button>
        <button onClick={CounterActions.decrement}>-</button>
      </div>
    )
  }
}

export default Controls;
