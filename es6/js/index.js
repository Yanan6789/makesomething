/**
 * for循环
 */

 const arr = [1,2,3,4,5]

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

const Price = {
  A:[1,2,3,4,5],
  B:[5,6,7,7,8],
  C:[9,9,9,9,9]
}


// 转换

let args = [].slice.call(arguments)
