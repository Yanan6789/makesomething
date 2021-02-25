/**
 * 快速排序
 * @param {quickSort} arr 
 */

const quickSort = (arr) => {
  if (arr.length <= 1) { return arr; }
  let left = []
  let right = []
  let mid = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)]
}

const result = quickSort([3, 66, 55, 44, 1, 88])
console.log(result)



/**
 * 冒泡排序
 */

// const bubbleSort = (arr) => {

// }

// const result = bubbleSort([3, 66, 55, 44, 1, 88])
// console.log(result);
