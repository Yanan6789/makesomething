/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // let num = BigInt(digits.join(''))
  // let string = String(num+1n)
  // let arr = string.split('')

  // return arr  
  for(let i = digits.length-1;i>=0;i--){
    digits[i] = (digits[i]+1)%10;
    if(digits[i]){return digits;}
  }
  return [1].concat(digits);
};



// @lc code=end

