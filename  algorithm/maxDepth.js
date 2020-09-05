

/**
 * # 104
 */
const bt = require('./bt')
const maxDepth = (root) =>{
  if(root == null){
    return 0
  }else{
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left,right)+1
  }
  
}

const r = maxDepth(bt)
console.log(r)
