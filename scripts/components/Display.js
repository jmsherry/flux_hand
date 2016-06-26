import React,{Component} from 'react';
import CounterConstants from './../constants/constants';
import CounterStore from './../stores/CounterStore';

// Method to retrieve application state from store
function getAppState() {
  return {
    total: CounterStore.getCount()
  };
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }
  // Listen for changes
componentDidMount() {
  CounterStore.addChangeListener(this._onChange);
}

// Unbind change listener
componentWillUnmount() {
  CounterStore.removeChangeListener(this._onChange);
}

  // Update view state when change event is received
  _onChange() {
    const that = this;
    console.log('_onChange', that);
    const newState = getAppState();
    (newState) => this.setState;
  }

  render(){
    return (
      <div className="display">
        <p>Total: {this.state.total}</p>
      </div>
    )
  }
}

export default Counter;
