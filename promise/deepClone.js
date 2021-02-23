

// 值类型和引用类型
// 栈 是 从上往下
// 堆 是 从下往上 










/**
 * 深拷贝
 */

 const obj1 = {
   name: 'pearyman',
   add:{
     address: 'shenzhen'
   },
   arr:[2,3,4]
 }

 let obj2 = deepClone(obj1)
 console.log(obj2);
 
 obj2.add.address = 'beijing'
 console.log(obj2.add.address)
 console.log(obj1.add.address)
 
 function deepClone(obj = {}) {
   if(typeof obj !== 'object' || obj == null){
     return obj
   }

   let result
   if(obj instanceof Array){
     result = []
   }else{
     result = {}
   }

   for(let key in obj){
     if(obj.hasOwnProperty(key)){
       result[key] = deepClone(obj[key])
     }
   }
   return result  
 }