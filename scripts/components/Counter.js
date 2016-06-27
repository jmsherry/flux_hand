import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CounterConstants from './../constants/constants';
import AppDispatcher from './../Dispatcher/AppDispatcher.js';
import Controls from './Controls';
import Display from './Display';

class Counter extends Component {
  render(){
    return (
      <div className="counter">
        <h1>My counter</h1>
        <Display />
        <Controls />
      </div>
    )
  }
}

export default Counter;
