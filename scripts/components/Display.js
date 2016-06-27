import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CounterConstants from './../constants/constants';
import CounterStore from './../stores/CounterStore';

// Method to retrieve application state from store
function getAppState() {
  console.log('getting app state...');
  return {
    count: CounterStore.getCount()
  };
}

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  // Update view state when change event is received
  _onChange() {
     this.setState(getAppState());
  }

  // Listen for changes
  componentDidMount() {
    CounterStore.addChangeListener(this._onChange.bind(this));
  }

  // Unbind change listener
  componentWillUnmount() {
    CounterStore.removeChangeListener(this._onChange.bind(this));
  }

  // shouldComponentUpdate( newProps, newState ) {
  //   console.log('shouldComponentUpdate', arguments);
  // }

  render() {
    return (
      <div className = "display" >
        <p>State: { this.state.count }</p>
      </div>
    )
  }
}

export default Display;
