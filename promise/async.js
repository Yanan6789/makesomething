
/**
 * async 执行顺序
 */


// async function async1(){
//   console.log('async1 start'); 
  
//   // setTimeout(() => {
//   //   console.log(11111111); 
    
//   // }, 0);
//   await async2()
//   // 把 await后面的都当做异步 setTimeout
//     console.log('async1 end');  
//     // setTimeout(() => {
//     //   console.log(2222222); 
      
//     // }, 0);

//     await async3()
//     console.log('async1 end 2');  
  
  
// }

// async function async2(){
//   console.log('async2'); 
  
// }

// async function async3(){
//   console.log('async3');  
  
// }

// console.log('script start'); 
// async1()
// console.log('script end');  




/**
 * for ... of
 */

//  function muti(num){
//    return new Promise(resolve=>{
//      setTimeout(() => {
//       resolve(num*num)
//      }, 1000);
//    })
//  }

//  const nums = [1,2,3]

// //  nums.forEach(async (i)=>{
// //    const res = await muti(i)
// //    console.log(res);
// //  })

// // 异步循环 
// !(async function(){
//   for(let i of nums){
//     const res = await muti(i)
//     console.log(res);
//   }
// })()


// 宏任务和微任务
// 宏任务 setTimeout setInterval ajax dom事件
// 微任务 Promise async/await




// async function fn(){
//   return 100
// }
// !(async function(){
//   const a = fn()
//   const b  = await fn()
//   console.log(a);
//   console.log(b);
// })()


// console.log(100);
// setTimeout(() => {
//   console.log(200)
// }, 0);

// Promise.resolve().then(()=>{
//   console.log(300);
  
// })
// console.log(400);


// async function fn1(){
//   console.log(1111) // 2
//   await fn2()
//   console.log(222)  // 6
  
// }

// async function fn2(){
//   console.log(333)  // 3
  
// }

// console.log(444)  // 1

// setTimeout(() => {
//   console.log(555);  // 8
  
// }, 0);

// fn1()

// new Promise(function(resolve){
//   console.log(666)  // 4
//   resolve()
// }).then(()=>{
//   console.log(777)  // 7
// })
// console.log(888)  // 5


var name = 100
var obj = {
  name: 1,
  fn: ()=> {
    console.log(this.name)
  }
}
console.log(obj.fn())