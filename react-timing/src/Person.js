import React, {Component} from 'react'
import propTypes from 'prop-types'
class Person extends Component{
  static propTypes = {
    name: propTypes.string.isRequired
  }
  constructor(props){
    super(props)
  }
  render(){
    let {name,age,gender,hobby,address} = this.props
    return(
      <table>
        <thead>
          <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>性别</td>
            <td>兴趣</td>
            <td>地址</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{hobby}</td>
            <td>{address.toString()}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Person
