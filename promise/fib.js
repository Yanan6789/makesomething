// function Fibonacci(n)
// {
//     // write code here
//     let dp = []
//     dp[0]=0
//     dp[1]=1
//     dp[2]=1
//     for(let i=3;i<n+1;i++){
//         dp[i]= dp[i-1]+dp[i-2]
//     }
//     return dp[n]
  
// }
// const res = Fibonacci(5)
// console.log(res);




/**
 * 山峰元素
 * input -> [2,4,1,2,7,8,4]
 * output-> 5
 */

//  function solve(nums) {
//    let arr = []
//    for(let i in nums){
//      if( arr.includes(nums[i+1])){
//        return i
//      }else{
//       arr.push(nums[i])
//      }
//    }
//  }

//  const result = solve([2,4,1,2,7,8,4])
//  console.log(result);
 

// function jumpFloor(number)
// {
//     // write code here
//     let dp = [];
//     dp[1]=1
//     dp[2]=2
//     for(let i = 3; i<=number; i++){
//         dp[i] = dp[i-1]+dp[i-2]
//     }
//     return dp[number]
// }

// const result = jumpFloor(5)
// console.log(result)



function bubbleSort(nums) {
  for(j=0; j< nums.length; j++){
    for(let i = 0; i< nums.length-j; i++){
      if(nums[i]>nums[i+1]){
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
      }
    }
  }
  return nums
}

const result = bubbleSort([2,4,1,2,7,8,4])
 console.log(result);