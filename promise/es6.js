let arr1 = [24,56,88,90,5]

// filter
// Array.prototype.filter = function(fn){
//  let newArr = []
//  for(let i=0; i<this.length; i++){
//    let flag = fn(this[i])
//    flag&&newArr.push(this[i])
//  }
//  return newArr
// }

// let result = arr1.filter(item => item>60)
// console.log(result)


// let arr3 = Array(3)
// arr3.fill(1)
// console.log(arr3)

// map reduce reduceRight filter forEach 
// find findIndex some every

// Array.prototype.find = function(fn){
//   // console.log(this)
//   for(let i =0; i<this.length; i++){
//     let flag = fn(this[i])
//     if(flag){
//       return i
//     }
//   }
// }
// let arr4  = [1,2,3]
// let result = arr4.every(item=> item>2)
// console.log(result)

// 把一个类数组转化成数组
Array.from(arguments)

let arr3 = Array.of(3)


