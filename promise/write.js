
let fs = require('fs')

let ws = fs.createWriteStream('./2.txt',{
  flags: 'w',
  mode: 0o666,
  start: 0,
  encoding: 'utf8',
  highWaterMark: 3
})

/**
 * 如果缓存区已满 返回false
 * 如果未满 ,返回  true
 */
let flag = ws.write('1')
console.log(flag);

ws.write('2')
ws.write('3')
ws.write('4')
ws.write('5')
