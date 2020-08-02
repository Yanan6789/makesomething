/**
 * 可读流
 */
let fs = require('fs')

let rs = fs.createReadStream('./1.txt',{
  highWaterMark: 3,
  flags: 'r',
  start: 3,
  end: 8,
  mode: 0o666,
  encoding: 'utf8'

})

rs.on('open',()=>{
  console.log('open')
})
rs.on('data',(data)=>{
  console.log(data)
  rs.pause()
  setTimeout(()=>{
    rs.resume()
  },2000)
})

rs.on('error',()=>{
  console.log('err')
})
rs.on('end',()=>{
  console.log('done')
})

rs.on('close',()=>{
  console.log('close')
})
