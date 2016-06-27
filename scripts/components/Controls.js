import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CounterConstants from './../constants/constants';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CounterActions from './../actions/actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }
  change(event){
    this.setState({todoText: event.target.value});
  }
  submit(event){
    if(this.state.todoText !== ''){
      CounterActions.addTodo({text: this.state.todoText});
      this.setState({todoText: ''});
    }
  }
  render(){
    return (
      <div className="controls form-inline">
        <input type="text" name="todoText" className="form-control" onChange={this.change.bind(this)} value={this.state.todoText} />
        <button className="btn btn-primary" onClick={this.submit.bind(this)}>Add a todo</button>
      </div>
    )
  }
}

export default Controls;
