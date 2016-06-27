import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CounterConstants from './../constants/constants';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CounterActions from './../actions/actions';

class Todo extends Component {
  render(){
    const todo = this.props.todo;
    const index = this.props.index;
    return (
      <li className="todo" key={index}>
        {todo.text}
        <button className="btn btn-danger" onClick={() => CounterActions.removeTodo(index)}>&times;</button>
      </li>
    )
  }
}

export default Todo;
