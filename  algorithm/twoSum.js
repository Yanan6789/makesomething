function twoSum( numbers ,  target ) {
  // write code here
  let arr = []
  for(let i=0; i<numbers.length; i++){
      let temp = target-numbers[i]
      numbers.splice(i,1)
      // console.log(numbers);
      
      if(numbers.includes(temp)){
        numbers.splice(i,0,target-temp)
        return arr = [i,numbers.indexOf(temp)]
      }else{
        numbers.splice(i,0,target-temp)
      }
   
  }
}

const result = twoSum([0,3,2,0],0)
console.log(result)
