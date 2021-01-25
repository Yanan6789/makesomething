

// class Student{
//   constructor(name,number){
//     this.name = name
//     this.number = number
//   }

//   sayHi(){
//     console.log(`你好 ${this.name}, 学号是 ${this.number}`);
//   }
// }

// let a = new  Student('pearyman','20101011')
// console.log(a.name);
// console.log(a.number);
// a.sayHi()


/**
 * 继承
 */

 class People{
   constructor(name){
     this.name = name
   }
   eat(){
     console.log(`${this.name} 吃东西呢`);
   }
 }

 class Student extends People{
   constructor(name,number){
     super(name)
     this.number = number
   }

   sayHi(){
     console.log(`${this.name},学号是${this.number}`);
   }
 }

 class Teacher extends People{
   
 }

 let a = new  Student('pearyman','20101011')
console.log(a.name);
console.log(a.number);
a.eat()
