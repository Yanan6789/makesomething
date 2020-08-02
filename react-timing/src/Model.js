
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
class Modal extends Component{
  constructor(){
    super()
    this.container = document.getElementById('model-root')
  }
  render(){
    return ReactDOM.createPortal(this.props.children, this.container)
  }
}


export default class ModelPage extends Component{
  constructor(){
    super()
    this.state = {
      show: false
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=> this.setState({show: !this.state.show})}></button>
        {
          this.state.show ? <Modal>
            <div className="content">
            <h1>显示窗口</h1>
            </div>
          </Modal> : null
        }
      </div>
    )
  }
}
