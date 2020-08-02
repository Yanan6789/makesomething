// function Fn(){

// }

// var a = new Fn()


// var obj = new Object()
// obj.__proto__ = Fn.prototype
// var result = fn.call(obj)

// if(typeof(result)=='object'){
//   a = result
// }else{
//   a = obj
// }


// const parseQueryString = url =>{
//   let json ={}
//   let arr = url.substr(url.indexOf('?')+1).split('&')
//   console.log(arr)
//   arr.forEach((item,index)=>{
//    let tmp =  item.split('=')
//     json[tmp[0]] = tmp[1]
//   })
//   console.log(json)
// }

// console.log(parseQueryString('https://www.nowcoder.com/discuss/193592?type=2&order=0&pos=1&page=1'))


function quick(arr){
  if(arr.length<1){
    return arr
  }
  let left = []
  let right = []
  let base = arr[0]

  for(let i=1;i<arr.length;i++){
    if(arr[i]>base){
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }
  return quick(left).concat(base, quick(right))
}

console.log(quick([4,3,2,1]))
