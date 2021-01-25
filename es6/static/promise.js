
// 第一题

// Promise.resolve().then(()=>{
//   console.log(1);
// }).catch(()=>{
//   console.log(2);
// }).then(()=>{
//   console.log(3);
// })

// no 2


// Promise.resolve().then(()=>{
//   console.log(1);
//   throw new Error('error1')
// }).catch(()=>{
//   console.log(2);
// }).then(()=>{
//   console.log(3);
// })

// no 3

// Promise.resolve().then(()=>{
//   console.log(1);
//   throw new Error('error1')
// }).catch(()=>{
//   console.log(2);
// }).catch(()=>{
//   console.log(3);
// })

// async function fn1(){
//   return 100
// }

// const res1 = fn1()
// console.log('res1',res1);
  

// !(async function(){
//   const p1 = Promise.resolve(300)
//   const data = await p1
//   console.log('data', data);
// })()

!(async function(){
  const p1 = Promise.resolve(300)
  const data = await 400
  console.log('data', data);
})()
