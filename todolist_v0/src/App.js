import React from 'react';
import TaskInputContainer from './components/TaskInputContainer'
import TaskList from './components/TaskList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {tasks: [{id: 123, content: 'Passear com Cachorro'}]} 
    document.title = 'Todolist'
  }

  addTask(newTask){
    console.log(newTask)
    this.setState({tasks: [...this.state.tasks, newTask]})
  }

  render(){
    return(
      <div className='App'>
        <h1>Todo List</h1>
        <TaskInputContainer addTask = {(newTask)=>{this.addTask(newTask)}}/>
        <TaskList tasks={this.state.tasks}/>
      </div>
  )}
}

export default App;
