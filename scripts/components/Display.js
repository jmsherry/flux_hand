import React, {
  Component
} from 'react';
import CounterConstants from './../constants/constants';
import CounterStore from './../stores/CounterStore';

// Method to retrieve application state from store
function getAppState() {
  console.log('getting app state...');
  return {
    count: CounterStore.getCount()
  };
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  // Update view state when change event is received
  _onChange() {
    console.log('prechange', this.state);
    const newState = getAppState();
    console.log('newState', newState);
    (newState) => this.replaceState;
  }

  // Listen for changes
  componentDidMount() {
    CounterStore.addChangeListener(this._onChange.bind(this));
  }

  // Unbind change listener
  componentWillUnmount() {
    CounterStore.removeChangeListener(this._onChange.bind(this));
  }

  shouldComponentUpdate( newProps, newState ) {
    console.log('shouldComponentUpdate', arguments);
  }

  render() {
    let count = getAppState().count;
    console.log('rendering', count, this.state);
    return (
      <div className = "display" >
        <p>State: { this.state.count }</p>
        <p>count: { count }</p>
      </div>
    )
  }
}

export default Counter;
