
import React, {Component} from 'react'

export default class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(hasError){
    this.setState({hasError})
  }

  render(){
    if(this.state.hasError){
      return <h1>次组件暂时无法显示</h1>
    }
    return this.props.children
  }
}
