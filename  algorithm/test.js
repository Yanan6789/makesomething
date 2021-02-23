// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// var maximumWealth = function(accounts) {

//   let arr = []
//   for(let i = 0; i < accounts.length; i++){
//     let sum = 0
//     for(let j = 0; j < accounts[i].length; j++){
//       sum+=accounts[i][j]
//     } 
//     arr.push(sum)
//   }
//   return Math.max(...arr)
// }
// maximumWealth([[1,5],[7,3],[3,5]])

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// var runningSum = function(nums) {

// }


/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
 let arr = []
 let max = 0

 for(let i = 0; i< s.length; i++){
   let index = arr.indexOf(s[i])
  if(index !== -1){
    arr.splice(0, index+1)
  }
   arr.push(s.charAt(i))
   max = Math.max(arr.length, max)
 }
 return max
}

const result = lengthOfLongestSubstring('abcabcbb')
console.log(result)
