import React,{Component} from 'react';
import Dispatcher from './../dispatcher/dispatcher.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render(){
    console.log(this);
    let { total } = this.state;
    return (
      <div className="counter">
        <h1>My counter</h1>
        <p>Total: {total}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default Counter;
