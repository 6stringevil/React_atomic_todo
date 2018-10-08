import React, { Component } from 'react';
import './App.css';
import './todo_data';
import TodoTable from './organisms/todolist/todo_table';
import TodoForm from './molecules/todoform/todo_form';
import { Switch, Route, Link } from 'react-router-dom';



const todoList = [
  {"task":"HTML","done":true, "id":1},
  {"task":"CSS","done":true, "id":2},
  {"task":"Responsive design","done":false, "id":3},
  {"task":"Git","done":true, "id":4},
  {"task":"JavaScript I","done":false, "id":5},
  {"task":"JavaScript II","done":false, "id":6}
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    this.setState({ todoList : todoList },function(){
      console.log(this.state.todoList);
    });
  }

  addTask = (newtask) => {
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newtask]
    }))
  }

  handleTaskUpdate = (taskId) => {
    const updatedTask = this.state.todoList.map((task) => {
      if (task.id === taskId) {
        return Object.assign({}, task, {
          done: task.done ? false : true,
        });
      } else {
        return task;
      }
    });
    this.setState({
      todoList: updatedTask,
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/alltasks'>List All Tasks</Link>
          <Link to='/new'>Add a new Todo Task</Link>
          <Link to='/completed'>List Completed Tasks</Link>
          <Link to='/pending'>List Pending Tasks</Link>
        </nav>
        <main className="App-header">
        <Switch>
          <Route path='/alltasks' render={(props) => (
            <TodoTable todoComplete = {this.state.todoList} updateTask = {this.handleTaskUpdate} filtertype="alltasks" />
          )}/>
            <Route path='/new' render={(props) => (
               <TodoForm addTask={this.addTask}/>
            )}/>
            <Route path='/completed' render={(props) => (
               <TodoTable todoComplete = {this.state.todoList} updateTask = {this.handleTaskUpdate} filtertype="completed" />
            )}/>
            <Route path='/pending' render={(props) => (
               <TodoTable todoComplete = {this.state.todoList} updateTask = {this.handleTaskUpdate} filtertype="pending" />
            )}/>
          </Switch>
          
         
        </main>
      </div>
    );
  }
}

export default App;

