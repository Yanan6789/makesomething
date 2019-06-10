import React, { Component } from 'react'
import Routes from '../config/router'

import {
  Link
} from 'react-router-dom'

export default class App extends Component {
  render(){
    return [
      <div>
        <Link to="/">HOME</Link>
        <br/>
        <Link to="/detail">DETAIL</Link>
      </div>,
      <Routes />
    ]
  }
}
