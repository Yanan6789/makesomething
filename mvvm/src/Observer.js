import Watcher from "./Watcher";


export class Observer{
  constructor(data){
    this.observe(data)
  }
  observe(data){
    // 将原有的属性改成 set 和 get形式
    if(!data || typeof data !=='object'){
      return
    }
    // 将数据一一劫持
    // console.log(Object.keys(data))
    Object.keys(data).forEach(key=>{
      this.defineReactive(data,key,data[key])
      this.observe(data[key])
    })
  }
  // 响应式
  defineReactive(obj, key, value){
    let that =this
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      set(newVal){
        if(newVal!=value){
          // 这里的this 不是实例
          that.observe(newVal) 
          value = newVal
          dep.notify()
        }
      },
      get(){
        Dep.target || dep.addSub(Dep.target)
        return value
      }
    })
  }
}

export class Dep {
  constructor(){
    this.subs = [] // 订阅的数组

  }

  addSub(watcher){
    this.subs.push(watcher)
  }

  notify(){
    this.subs.forEach(watcher=>{
      Watcher.update()
    })
  }
}

