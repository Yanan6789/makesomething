

const multiply = (array) => {
  let _arr = []
  for(let i=0; i<array.length; i++){  
    let cur = array.splice(i,1)
    _arr[i] = array.reduce((pre,cur)=>{
      return pre * cur
    })
    array.splice(i,0,cur)
  }
  console.log( _arr); 
  // console.log(_arr);
}

const result = multiply([1,2,3,4,5])
// console.log(result)
