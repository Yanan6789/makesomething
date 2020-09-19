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

// let dog = new Animal('dog')
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

// let dog = new Animal('dog')
// dog.eat()


