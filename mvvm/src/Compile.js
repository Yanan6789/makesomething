import Watcher from './Watcher'
export default class Complile {
  constructor(el,vm){
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    if(this.el){
      // 1, 把真实dom 移入到内存fragment中
   
      let fragment = this.node2fragment(this.el)
      // 2，编译=》 提取想要的元素节点和文本节点
      this.compile(fragment)
      // 3，把编译好的fragment塞回到页面中
      this.el.appendChild(fragment)
    }
  }
  /** 辅助方法 */ 
  isElementNode(node){
    return node.nodeType === 1
  }
  // 是不是指令
  isDirective(name){
    return name.includes('v-')
  }
  /** 核心方法 */ 
  node2fragment(el){
    let fragment = document.createDocumentFragment()
    let firstChild
    while(firstChild=el.firstChild){
      fragment.appendChild(firstChild)
    }
    return fragment
  }

  compile(fragment){
    let childNodes = fragment.childNodes
    Array.from(childNodes).forEach((node)=>{
      if(this.isElementNode(node)){
        // 元素
        // 编译元素
        this.compileElement(node)
        this.compile(node)
      }else{
        // 文本
        // 编译文本
        this.compileText(node)
        // console.log(node)
      }
    })
  }
  //编译 v-model
  compileElement(node){
    let attrs = node.attributes
    Array.from(attrs).forEach(attr=>{
      // 判断属性名字是不是包含v-
      let attrName = attr.name
      if(this.isDirective(attrName)){
        // 取到对应的值 放到节点中
        let expr = attr.value
        let [,type] = attrName.split('-')
        // console.log(type)
        ComplileUtil[type](node,this.vm,expr)
      }
    })
  }
  // 编译{{}}
  compileText(node){
    let expr = node.textContent
    let reg = /\{\{([^}]+)\}\}/g
    if(reg.test(expr)){
      ComplileUtil['text'](node,this.vm,expr)
    }
  }
}

let ComplileUtil = {
  getVal(vm,expr){
    expr = expr.split('.')
    // 获取实例上对应的数据
    return expr.reduce((prev,next)=>{
      return prev[next]
    },vm.$data)
  },
  getTextVal(vm, expr){
    return expr.replace(/\{\{([^}]+)\}\}/g,(...rest)=>{
      return this.getVal(vm,rest[1])
    })
  },
  // 文本处理
  text(node,vm,expr){
    let updateFn = this.updater['textUpdater']
    // // message.a => [message,a] vm.$data.message.a
    let value = this.getTextVal(vm,expr)
    expr.replace(/\{\{([^}]+)\}\}/g,(...rest)=>{
      new Watcher(vm,rest[1],(newVal)=>{
        // 如果数据变化了 文本节点需要重新获取依赖的属性 更新文本中的内容
        updateFn && updateFn(node,this.getTextVal(vm,expr))
      })
    })
    updateFn && updateFn(node,value)
  },
  setVal(vm,expr,value){
    expr = expr.split('.')
    // 收敛
    return expr.reduce((prev,next,currentIndex)=>{
      if(currentIndex === expr.length-1){
        return prev[next] = value
      }
      return prev[next]
    },vm.$data)
  },
  // 输入框处理
  model(node,vm,expr){
    let updateFn = this.updater['modelUpdater']
    // message.a => [message,a] vm.$data.message.a
    // 加一个监控 调用watch的vallback
    new Watcher(vm,expr,(newVal)=>{
      // 值变化后会调用cb 将新的值传递
      updateFn && updateFn(node,this.getVal(vm,expr))
    })
    node.addEventListener('input',(e)=>{
      let newVal = e.target.value
      this.setVal(vm,expr,newVal)
    })
    updateFn && updateFn(node,this.getVal(vm,expr))
  },
  updater:{
    // 文本更新
    textUpdater(node,value){
      node.textContent = value
    },
    // 输入框更新
    modelUpdater(node, value){
      node.value = value
    }
  }
}
