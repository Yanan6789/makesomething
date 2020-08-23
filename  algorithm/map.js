const m = new Map()

// 增
m.set('a','aa')
m.set('b','bb')
console.log(m)

// 删除
m.delete('a')

m.set('b','ccc')
console.log(m.has('b'))
