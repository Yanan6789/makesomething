

// function isValid( s ) {
//   // write code here
//   if(s.length%2!==0) return false
//   let stack = []
//   const map = new Map([[ '[', ']'],['(',')'],['{', '}']])
  
//   for(let i=0; i<s.length; i++){
//     if(map.has(s[i])){
//       stack.push(map.get(s[i]))
//     }else{
//       if(stack.pop()!==s[i]){
//         return false
//       }
//     }
//   }
//   if(stack.length ===0){
//     return true
//   }else{
//   return false
//   }
  
// }
// const result = isValid( '((' )
// console.log(result)



/**
 * numbers , target
 */

// function twoSum( numbers ,  target ) {
//   // write code here
//   let 
// }

// const result = twoSum([3,2,4],6)
// console.log(result)



function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let res = []
    for(let i = 0; i<array.length; i++){
      if(array.indexOf(array[i])===array.lastIndexOf(array[i])){
        res.push(array[i])
      }
    }
    return res
}

const result = FindNumsAppearOnce([2,4,3,6,3,2,5,5,6,7])
console.log(result)
