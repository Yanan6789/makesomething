const bt = require('./bt')
// console.log(bt)

/**
 * 先序遍历
 *  
 * */ 
const preorder = (root) =>{
  if(!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

/**
 * 先序遍历
 * 非递归版
 * */ 
const preorder = (root) =>{
  if(!root) return
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    console.log(n.val)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}


// 中序遍历
const inorder = (root) =>{
  if(!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}


// 非递归版
const inorder = (root) =>{
  if(!root) return
  const stack = []
  let p = root
  while(stack.length || p){
    while(p){
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  } 
}


// 后序遍历
const postorder = (root) =>{
  if(!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}

// 非递归版
const postorder = (root) =>{
  if(!root) return
  const stack = [root]
  const outputStack = []
  while(stack.length){
    const n = stack.pop()
    outputStack.push(n.val)
    if(n.left) stack.push(n.left)
    if(n.right) stack.push(n.right)
  }
  console.log(outputStack.reverse()) 
}

postorder(bt)
