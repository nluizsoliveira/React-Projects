import React from 'react';

class Task extends React.Component{
    constructor(props){
      super(props)
      this.state = {toggle: false}
    }
  
    toggle(){
      this.setState({toggle: !this.state.toggle})
    }
  
    getContentStyle(){
      return this.state.toggle? "TaskContent Toggle": "TaskContent"
    }
    
    removeTaskHandler(){
      this.props.removeTask(this.props.id)
    }

    render(){
        return(
          <div id={this.props.id} className='Task'>
            <div className = "ClickableIcon">
              <input type = "checkbox" onClick={()=>{this.toggle()}}></input>
            </div>
            <div className={this.getContentStyle()}>{this.props.content}</div>
            <div>
              <div className='ClickableIcon' onClick={()=>this.removeTaskHandler()}>X</div>
              <div className='ClickableIcon'>✎</div>
            </div>
          </div>
      )}
}

export default Task