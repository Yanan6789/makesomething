

// function bind(fn, context){
//   return function(){
//     fn.apply(context, arguments)
//   }
// }

function match(l,r){
  return (l==='[' && r===']') || (l==='(' && r===')')
}

function is_balance(str){
  const [first, ...others] = str
  const stack = [first]
  while(others.length>0){
    const l = stack[stack.length-1]
    const r = others.shift()
    if(!match(l,r)){
      stack.push(r)
    }else{
      stack.pop()
    }
  }
  return stack.length===0
}

console.log(is_balance('[()]'))
