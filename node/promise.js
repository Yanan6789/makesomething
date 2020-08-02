let fs = require('fs')
let util = require('util')
// fs.readFile('./file.js','utf8',function(err,data){
//   if(err) return console.log(err)
//   console.log(data)
// })

// function read (url){
//   return new Promise ((resolve, reject)=>{
//     fs.readFile(url,'utf8',function(err,data){
//         if(err) return reject(err)
//         resolve(data)
//       })
//   })
// }

let read = util.promisify(fs.readFile)

read('./file.js', 'utf8').then(function(data){
  console.log(data)
},function(err){
  console.log(err)
})

