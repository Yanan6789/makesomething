let mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(3)

const mySet2 = new Set([2,3,4])

const result = [...mySet].filter(i => mySet2.has(i))
const difference = [...mySet].filter(i => !mySet2.has(i))
console.log(result)
console.log(difference)
