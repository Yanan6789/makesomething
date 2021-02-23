/**
 * for循环
 */

//  const arr = [1,2,3,4,5]

//  for(let i=0; i<arr.length; i++){
//    if(arr[i]===2) continue
//    console.log(arr[i])
//  }

//  arr.forEach((item)=>{
//   if(item===2) continue
//    console.log(item)
//  })

// every
// arr.every((item)=>{
//   console.log(item)
//   return true
// })

// for in
// arr.a = 8
// for (let index in arr){
//   console.log(index,arr[index])
// }

// for of
// for(let item of arr){
//   console.log(item)
// }

// const Price = {
//   A:[1,2,3,4,5],
//   B:[5,6,7,7,8],
//   C:[9,9,9,9,9]
// }

// 转换
// es5
// let args = [].slice.call(arguments)

// // Array.prototype.from
// let args = Array.from(arguments)

// let array = Array.from({length:10},()=>{
//   return 1
// })
// console.log(array);

// Array.of

// let array  = Array.of(1,2,8,4,5)
// console.log(array);

// Array.fill

// let arr = Array(5).fill(1)
// console.log(arr);

// let array = [1,2,3,4,5]

// let res = array.filter(item=>item>30)
// console.log(res);

// Array.find

// let res1 = array.find(item=> item===6)
// console.log(res1);
//
// let res = array.includes(3)
// console.log(res)

// array.findIndex

// let res = array.findIndex(item=>item===2)
// console.log(res);

/**
 * class 类
 */

//  let Animal = function(type){
//    this.type = type
//   //  this.eat =function(){
//   //   console.log('i am eat food');
//   //  }
//  }

//  Animal.prototype.eat = function(){
//   console.log('i am eat food');
//  }

//  let dog = new Animal('dog')
//  let monkey = new Animal('monkey')

// console.log(dog);
// console.log(monkey);

// monkey.constructor.prototype.eat = function(){
//   console.log('error11111')
// }

// dog.eat()
// monkey.eat()
// class Animal  {
//   constructor(type){
//     this.type = type
//   }

//   eat(){
//     console.log('i am eat food');
//   }
// }

// let dog = new Animal('dog')
//  let monkey = new Animal('monkey')

// console.log(dog);
// console.log(monkey);

// dog.eat()
// monkey.eat()
// console.log(typeof Animal);

// 私有属性
// 只读
// let _age = 5
// class Animal  {
//   constructor(type){
//     this.type = type
//   }

//   get age(){
//     return _age
//   }

//   set age(value){
//    if(value<7 && value>4){
//      _age = value
//    }
//   }

//   eat(){
//     console.log('i am eat food');
//   }
// }

// let dog = new Animal('dog')
// // console.log(dog.age);

// dog.age = 6
// console.log(dog.age);

// class Animal  {
//   constructor(type){
//     this.type = type
//   }

//   eat(){
//     Animal.walk()
//     console.log('i am eat food');
//   }

//   static walk(){
//     console.log('i am walking');
//   }
// }

// class Dog extends Animal{
//   // constructor(type){
//   //   super(type)
//   // }
// }

// let dog = new Dog('dog')
// dog.eat()

// let Animal = function(type){
//   this.type = type
// }

// Animal.prototype.eat = function(){
//   Animal.walk()
//   console.log('i am eating');
// }
// Animal.walk = function(){
//   console.log('i am walking');
// }

// let Dog = function(){
//   // 初始化父类的构造函数
//   Animal.call(this, 'dog')
//   this.run = function(){
//     console.log('i can run')
//   }
// }
// Dog.prototype = Animal.prototype

// let dog = new Dog('dog')
// dog.eat()

// rest parameter

// function f (...nums){
//   console.log(nums.length);
// }
// f(1,2,3,5)

// 计算三角形周长

// function sum(x=1,y=2,z=2){
//   console.log(x+y+z);
// }

// let data = [4,5,6]
// sum(...data)

// 箭头函数

// let hello = () =>{
//   console.log(111);
// }
// hello()

// 箭头函数中的this

// let test = {
//   name: 'test',
//   say: () => {
//     console.log(this.name);
//   }
// }

// test.say()

/**
 * Object
 */

//  let obj = {
//    x:1,
//    y:2,
//    // 异步
//    * hello(){
//      console.log('hello world');
//    }
//  }
//  obj.hello().next()

/**
 * Set
 */

//  let s = new Set([1,1])
//  s.add('hello')
// //  s.delete('hello')
// //  s.clear()
// console.log(s.size);
// console.log(s.has(11));

// console.log(s.keys());
// console.log(s.values());
// console.log(s.entries());

/**
 * Map  key=>value
 */

//  let map = new Map([[1,2],[3,4]])
//  map.set(5,6)
//  map.set(5,33)
//  map.delete(5)
// // map.clear()
// console.log(map)
// console.log(map.size)

// let obj = {
//   a: 'value-a',
//   b: 'value-b'
// }
// map.forEach((value,key) => {
//   console.log(key,value);
// });

// for(let [key,value] of map){
//   console.log(key,value);
// }

/**
 * 对象的复制
 */

//  let target = {
//   a: 'value-a',
//   b: {
//     c: {
//       d: null
//     },
//     e: 4
//   },
//   f: 5
//  }
//  let source = {
//   a: 'value-a',
//   b: {
//     c: {
//       d: undefined
//     },
//     e: 4
//   },
//   f: 5
// }

// Object.assign(target,source)

// console.log(target);

// const a = 'aaa_aa_a'

// const r1 = /a+/g
// const r2 = /a+/y

// console.log(r1.exec(a))
// console.log(r2.exec(a))

// console.log(r1.exec(a))
// console.log(r2.exec(a))

/**
 * template 模板字符串
 */

//  const a = 10
//  const b = 20
//  const c = 'javascript'

// const str = `hello my age is ${a+b}, i love ${c}`
// console.log(str);

/**
 * 解构赋值
 */

//  let arr = ['hello', 'world','aaa','bbb']
//  let [first,...second] = arr
//  console.log(first);
//  console.log(second);

// function loadScript (src,cb){
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () =>{ cb(src)}
//   document.head.append(script)
// }

// function test(name){
//   console.log(name);
// }
// loadScript('./1.js',function(script){
//   loadScript('./2.js',function(script){
//     loadScript('./3.js',function(script){

//     })
//   })
// })

/**
 *
 * @param {link} src
 */
// function loadScript(src){
//   return new Promise((resolve,reject)=>{
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src)
//     script.onerror = (err) => reject(err)
//     document.head.append(script)
//   })
// }

// loadScript('./1.js')
//   .then(loadScript('./2.js'))
//   .then(loadScript('./3.js'))
//   .catch(err => {
//     console.log(err)
//   })

/**
 * promise.all
 * 并行接口的实现
 */

//    const p1 = Promise.resolve(1)
//    const p2 = Promise.resolve(2)
//    const p3 = Promise.resolve(3)

// Promise.all([p1,p2,p3])
//   .then((value)=>{
//     console.log(value);
//   })

/**
 * promise.race
 */

//  const p1 = ()=>{
//    return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(1)
//     }, 1000)
//    })
//  }

//  const p2 = () =>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(2)
//     }, 3000)
//   })
//  }

//  Promise.race([p1(),p2()]).then((value)=>{
//    console.log(value);
//  })

/**
 * proxy
 */

//  let o = {
//    name: 'pearymam',
//    price: 190
//  }

//  let d = new Proxy(o, {
//    get(target,key){
//       if(key==='price'){
//         return target[key]+20
//       }else{
//         return target[key]
//       }
//    }

//  })

//  console.log(d.price)

// class Component {
//   constructor(){
//     this.proxy = new Proxy({
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//   get id(){
//     return this.proxy.id
//   }
// }

// let com = new Component()
// let com2 = new Component()
// for(let i=0; i<10;i++){
//   console.log(com.id, com2.id)
// }

// com.id = 'abc'
// console.log(com.id, com2.id)

//  let o = {
//    name: 'pearymam',
//    price: 190
//  }

//  let d = Proxy.revocable(o, {
//    get(target,key){
//       if(key==='price'){
//         return target[key]+20
//       }else{
//         return target[key]
//       }
//    }

//  })

//  console.log(d.proxy.price)

//  setTimeout(() => {
//     d.revoke()
//     console.log(d.proxy.price)
//  }, 1000)

/**
 *
 */

function* loop(params) {
  for (let i = 0; i < 5; i++) {
    yield console.log(i)
  }
}

const l = loop()
l.next()
l.next()
l.next()
// loop().next()
// loop().next().next()
