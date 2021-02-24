
// let fs = require('fs')

// let ws = fs.createWriteStream('./2.txt', {
//   flags: 'w',
//   mode: 0o666,
//   start: 0,
//   encoding: 'utf8',
//   highWaterMark: 3
// })

// /**
//  * 如果缓存区已满 返回false
//  * 如果未满 ,返回  true
//  */
// let flag = ws.write('1')
// console.log(flag);

// ws.write('2')
// ws.write('3')
// ws.write('4')
// ws.write('5')

/**
 * 红灯 3S  绿灯 2s  蓝灯 1s 交替
 */
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function blue() {
  console.log('blue')
}

const task = (timer, name) => {
  setTimeout(() => {
    if (name === 'red') {
      red()
    } else if (name === 'green') {
      green()
    } else if (name === 'blue') {
      blue()
    }
  }, timer);
}

const step = async () => {
  await task(3000, 'red')
  await task(2000, 'green')
  await task(1000, 'blue')
  step()
}
step()
