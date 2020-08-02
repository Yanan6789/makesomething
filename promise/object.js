/**
 * 1, 短命名
 */
// let obj = {name,age}

/**
 * 
 */

//  let obj1 = {age:1}
//  let obj2 = {age:2}
//  let obj3 = {}
// // obj3.__proto__ = obj1 
//  Object.setPrototypeOf(obj3, obj1)
//  console.log(obj3.age)

/**
 * 类里面可以定义构造函数
 */
// class Parent{
//   constructor(name){
//     this.name = name 
//   }
//   getName(){
//     console.log(this.name)
//   }
// }
// let p = new Parent('pearyman')
// p.getName()


let arr = [1,2,3]
arr.splice(2,0,4)
