
const PENDING = 'pending' //初始态
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor){
  let self = this  // 先缓存当前promise实例
  self.status = PENDING
  self.onResolvedCallbacks = []
  self.onRejectedCallbacks = []

  // 如果已经是成功态或者是失败态  则说明都不做
  function resolve(value){
    if(self.status === PENDING){
      self.status = FULFILLED
      self.value = value // 成功后会得到一个值
      self.onResolvedCallbacks.forEach(cb=>cb(self.value))
    }
  }

  function reject(reason){
    // 初始态  则转成失败态
    if(self.status === PENDING){
      self.status = REJECTED
      self.value = reason 
      self.onRejectedCallbacks.forEach(cb=>cb(self.value))
    }
  } 

  try{
    executor(resolve,reject)
  }catch(e){
    reject(e)
  }

}

// onFulfilled 接收成功的值
Promise.prototype.then = function(onFulfilled,onRejected){
  onFulfilled = typeof onFulfilled === 'function' ?onFulfilled:value=>value
  onRejected = typeof onRejected === 'function' ? onRejected: reason=> {throw reason}
  let self = this
  let promise2
  if(self.status === FULFILLED){
    return promise2 = new Promise(function(resolve,reject){
      let x = onFulfilled(self.value)
      if(x instanceof Promise){
        // 如果获取到x, 会走解析promise的过程
        resolvePromise(promise2,x,resolve,reject)
      }
    })
    
  }

  if(self.status === REJECTED){
    let x = onRejected(self.value)
    resolvePromise(promise2,x,resolve,reject)
  }

  if(self.status === PENDING){
    self.onResolvedCallbacks.push(function(){
      let x = onFulfilled(self.value)
      resolvePromise(promise2,x,resolve,reject)
    })
    self.onRejectedCallbacks.push(function(){
      let x = onRejected(self.value)
      resolvePromise(promise2,x,resolve,reject)
    })
  }
}

module.exports = Promise
