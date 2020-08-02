// 在文件中打印 this不是global
// node 自带模块化功能
// 一个js 文件就是一个模块  模块this 不是 global
// console.log(this)

// let a = 1
console.time('start')
for(let i = 0; i<100; i++){

}
console.timeEnd('start')
