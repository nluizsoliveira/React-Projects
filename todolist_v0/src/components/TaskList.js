import React from 'react'
import Task from './Task'

class TaskList extends React.Component{
    render(){
      return(
        <div className='TaskList'>
          {
            this.props.tasks.map((task)=>{
              return <Task content={task.content} key={task.id} id={task.id} removeTask = {(id)=>{this.props.removeTask(id)}}/>
            })
          }
        </div>
    )}
}

export default TaskList