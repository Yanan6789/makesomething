

/**
 * array
 */

 // 数组开头添加数据
 // arr.unshift(0)
//  console.log(arr)

 // 数组末尾删除数据
 // arr.pop()
 // console.log(arr)

 // 数组开头去掉首位
 // arr.shift()
 // console.log(arr)

 // splice()


//  let arr = [1,2,3,4,5,6]
//  const res = arr.splice(1,2)
// console.log(res)
// console.log(arr)

// 迭代器函数
// every 会迭代数组中的每一个元素，直到返回false 
// some 和every 正相反，会迭代每一个元素，直到函数返回true

// function isEven(x){
//   return x%2 ===0 ? true: false
// }

// let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//const result = numbers.every(isEven)
//const result = numbers.some(isEven)
// const result = numbers.map(isEven) 
// [
//   false, true,  false,
//   true,  false, true,
//   false, true,  false,
//   true,  false, true,
//   false, true,  false
// ]
// const result = numbers.filter(isEven) 
// [
//   2,  4,  6, 8,
//  10, 12, 14
// ]
// const r2 = numbers.reduce((prev,cur)=>prev+cur)
// console.log(r2)

const A = [1,3,5]
const B = [1,3,5]

let C = []
while(A.length>0 && B.length>0){
  if(A[0]>B[0]){
    const temp = B.shift()
    C.push(temp)
  }else if(A[0]<B[0]){
    const temp = A.shift()
    C.push(temp)
  }else{
    const tempA = A.shift()
    const tempB = B.shift()
    C.push(tempA)
    C.push(tempB)
  }
}

if(A.length===0){ C = [...C,...B]}
if(B.length===0){ C = [...C,...A]}

console.log(C)
