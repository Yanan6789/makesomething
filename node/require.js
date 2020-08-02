// define 声明模块  通过require 使用一个模块

let factories = {}

function define(moduleName, dependenices, factory){
  factory.dependenices = dependenices
  factories[moduleName] = factory
}


function require(mods,callback){
 let result =  mods.map((mod)=>{
    let factory = factories[mod]
    let exports = factory()
    let dependenices = factory.dependenices
    require(dependenices,function(){
      exports = factory.apply(null,arguments)
    })
    return exports
  })
  callback.apply (null, result)
}
define('name',[], function(){
  return 'hello'
})

define('age',['name'], function(name){
  return name + 11
})

require(['age'], function(age){
  console.log(age)
})


