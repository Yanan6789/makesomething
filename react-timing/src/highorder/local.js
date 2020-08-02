/**
 * 
 * @param {穿进去一个老组件 返回一个新组件} OldComponent 
 */
import React,{Component} from 'react'
export default function(OldComponent){
  class NewComponent extends Component{
    render(){
      return OldComponent
    }
  }
}
