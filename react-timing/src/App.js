import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  static defaultProps = {
    count: 0
  }
  constructor(props){
    super(props)
    this.state = {
      count: props.count
    }
  }
  componentWillMount(){
    console.log('1 .组件将要挂载')
  }
  componentDidMount(){
    console.log('3.组件挂载完成')
  }
  handleClick=()=>{
    this.setState(state=>({
      count: state.count+1
    }))
  }
  // 组件的属性或者状态有一个发生改变，默认会重新渲染
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.count<10){
      return true
    }else{
      return false
    }
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('组件更新完毕')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  handleKill=()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  render(){
    console.log('2.render')
    return (
      <div>
        福计数器 {this.state.count}
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleKill}>Kill</button>
        <SubApp count={this.state.count}/>
      </div>
    )
  }
}

class SubApp extends Component{
  // 当自组件将要接收到父组件传给的新属性的时候
  componentWillReceiveProps(){
    console.log('subapp----------componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.count<5){
      return true
    }else{
      return false
    }
  }


  componentWillUpdate(){
    console.log('subapp----------componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('subapp----------组件更新完毕')
  }

  render(){
    return (
      <div>子计数器 {this.props.count}</div>
    )
  }
}

export default App;
