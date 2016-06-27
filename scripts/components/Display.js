import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CounterConstants from './../constants/constants';
import CounterStore from './../stores/CounterStore';
import Todo from './todo';

// Method to retrieve application state from store
function getAppState() {
  console.log('getting app state...');
  return {
    todos: CounterStore.getTodos()
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

  render() {
    const todos = getAppState().todos.map((todo, i) => {
      return <Todo todo={todo} index={i} key={i} />
    });
    return (
      <div className = "display" >
        <p>Todos:</p>
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default Display;
