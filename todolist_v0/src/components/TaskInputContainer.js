import React from 'react'

class TaskInputContainer extends React.Component{
    constructor(props){
      super(props)
      this.state = {content: ''}
    }
  
    updateInputValue(e){
      this.setState({content: e.target.value})
    }
  
    addTaskHandler(){
      const newTask = {id: Math.random(), content: this.state.content}
      this.props.addTask(newTask)
      this.setState({content: ''})
    }
  
    enterHandler(e){
      if(e.key === 'Enter'){this.addTaskHandler()}
    }
    
    render(){
      return(
        <div className="TaskInputContainer">
          <input
            className = "Input" 
            maxLength = {60} 
            onKeyUp = {(e)=>{this.enterHandler(e)}} 
            onChange = {(e)=>{this.updateInputValue(e)}} 
            value = {this.state.content}
            placeholder = "Digite uma nova tarefa"
          />
          <div className = "ClickableIcon" onClick={()=>{this.addTaskHandler()}}>+</div>
        </div>
    )}
}

export default TaskInputContainer