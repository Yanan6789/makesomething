import React , {Component,Fragment, PureComponent} from 'react'
import {List, is} from 'immutable'
export default class Todos extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoList : []
    }
  }

  handleClick=()=>{
    let todo = this.todo.value
    let todoList = List(this.state.todoList)
    todoList = todoList.push(todo)
    this.setState({
      todoList
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(is(nextProps,this.props))
    console.log(is(nextState,this.state))
    return !(is(nextProps,this.props)&&is(nextState,this.state))
    // if(nextState.todoList === this.state.todoList){
    //   return false
    // }else{
    //   return true
    // }
  }
  render(){
    console.log('render')
    return(
      <Fragment>
        <input ref={input=>this.todo=input}/> 
        <button onClick={this.handleClick}>+</button>
        <ul>
        {
          this.state.todoList.map((item,index)=>{
          return (<li key={index}>{item}</li>)
          })
        }
        </ul>
      </Fragment>
    )
  }
}
