const bt = require('./bt')
// console.log(bt)

const preorder = (root) =>{
  if(!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

const inorder = (root) =>{
  if(!root) return
  preorder(root.left)
  console.log(root.val)
  preorder(root.right)
}

const postorder = (root) =>{
  if(!root) return
  preorder(root.left)
  preorder(root.right)
  console.log(root.val)
}

postorder(bt)
