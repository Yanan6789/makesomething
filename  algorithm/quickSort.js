/**
 * 快速排序
 * @param {quickSort} arr 
 */

// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr
//   let mid = arr[0]
//   let left = []
//   let right = []
//   for (let i = 1; i < arr.length; i++) {
//     if (mid < arr[i]) {
//       right.push(arr[i])
//     } else {
//       left.push(arr[i])
//     }
//   }
//   return [...quickSort(left), mid, ...quickSort(right)]
// }

// const result = quickSort([3, 66, 55, 44, 1, 88])
// console.log(result)



/**
 * 冒泡排序
 */

const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const result = bubbleSort([3, 66, 55, 44, 1, 88])
console.log(result);
