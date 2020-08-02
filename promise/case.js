let MyPromise = require('./promise')

let p1 = new MyPromise(function(resolve,reject){
  setTimeout(function(){
    let num = Math.random()
    if(num<.5){
      resolve(num)
    }else{
      reject('fail')
    }
  })
})

p1.then(function(data){
  console.log(data)
},function(err){
  console.log(err)
})
