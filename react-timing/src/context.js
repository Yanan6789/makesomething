import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Title extends Component{
  static contextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  }
  render(){
    return (
      <div>
        <h1 style={{color: this.context.color}}>大家好</h1>
        <button onClick={()=>{this.context.setColor('yellow')}}>变黄</button>
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return (
      <div>
        <Title/>
      </div>
    )
  }
}

class Main extends Component{
  render(){
    return (
      <div>
        <Title/>
      </div>
    )
  }
}


export default class HomePage extends Component{
  static childContextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  }
  getChildContext=()=>{
    return {
      color: this.state.color,
      setColor: this.setColor
    }
  }
  constructor(){
    super()
    this.state = {
      color: 'red'
    }
  }
  setColor = (color) =>{
    this.setState({color})
  }
  render(){
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

