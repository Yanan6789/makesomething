/**
 * 第三方模块通过npm 来安装
 */

 function Parent(){
   this.somking = '抽烟'
 }

 Parent.prototype.sleep = '睡觉'

 function Child(){

 }
// Object.setPrototypeOf(Child.prototype, Parent.prototype)

Child.prototype = Object.create(Parent.prototype)

 let child = new Child()

 console.log(child.sleep)

/**
 * 方法的继承
 * Object.setPrototypeOf
 * Object.create()
 */
