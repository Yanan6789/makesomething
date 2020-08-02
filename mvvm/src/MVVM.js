import Compile from './Compile'
import {Observer} from './Observer'

export default class MVVM{
  constructor(options){
    this.$el = options.el,
    this.$data = options.data
    if(this.$el){
      // 把对象的所有属性改成set 和 get
      new Observer(this.$data)
      this.proxyData(this.$data)
      new Compile(this.$el, this)
    }
  }

  proxyData(data){
    Object.keys(data).forEach(key=>{
      Object.defineProperty(this,key,{
        get(){
          return data[key]
        },
        set(newVal){
          data[key] = newVal
        }
      })
    })
  }
}
