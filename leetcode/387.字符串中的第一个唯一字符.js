/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if(s.length>0){
    for(let i=0; i<s.length; i++){
      const arr = s.split('')
      const c = arr.splice(i,1).join('')
  
      if(!arr.includes(c)){
        return i
      }
    }
    return -1
  }else{
    return -1
  }
};
console.log(firstUniqChar(""));

// @lc code=end

