
/**
 * deepClone
 */

const obj = {
  age: 20,
  namne:  'pearyman',
  address: {
    city: 'beijing'
  },
  arr: ['a','b','c']
}
let obj2 = deepClone(obj)
obj2.address.city = 'sanya'
console.log(obj.address.city)


function deepClone(obj = {}){
  if(typeof obj !== 'object' || obj == null){
    return obj
  }

  let result
  if(obj instanceof Array){
    result = []
  }else{
    result = {}
  }

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

/**
 * 值类型和引用类型 
 */
const obj1 = {x:100, y:200}
const obj2 = obj1

let x1 = obj1.x
obj2.x = 101
x1 = 102

console.log(obj1);
