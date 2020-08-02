import {Dep} from './Observer'
// 给需要变花的元素增加一个观察者  数据变化后 执行对应的方法
export default class Watcher {
  constructor(vm,expr,cb){
    this.vm = vm
    this.expr = expr
    this.cb = cb 
    // 先获取一下老的值
    this.value = this.get()
  }
  getVal(vm,expr){
    expr = expr.split('.')
    // 获取实例上对应的数据
    return expr.reduce((prev,next)=>{
      return prev[next]
    },vm.$data)
  }
  get(){
    Dep.target = this
    let value = this.getVal(this.vm, this.expr)
    return value
  }
  // 对外暴露的方法
  update(){
    let newVal = this.getVal(this.vm, this.expr)
    let oldVal = this.value
    if(newVal!=oldVal){
      this.cb(newVal) // 调用watch的callback
    }
  }
}

// 新老值比对  不一样发生变化  就调用更新方法
