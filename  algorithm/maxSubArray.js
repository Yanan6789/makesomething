

var maxSubArray = function(nums){
  let ans = nums[0]
  let sum = 0

  for(let i =0; i<nums.length;i++){
    if(sum>0){
      sum += nums[i]
    }else{
      sum = nums[i]
    }
    ans = Math.max(ans,sum)
  }
  console.log(ans)
}

maxSubArray([1,2,4,-2,-3])