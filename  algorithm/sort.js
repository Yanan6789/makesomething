/**
 * 冒泡排序 bubbleSort
 * @param {bubblSort} arr
 */

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++)
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   return arr
// }
// const result = bubbleSort([5, 4, 3, 2, 1])
// console.log(result)


/**
 * 插入排序
 * @param {*} arr 
 * @param {*} item 
 */

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i]
//     let j = i
//     while (j > 0) {
//       if (arr[j - 1] > temp) {
//         arr[j] = arr[j - 1]
//       } else {
//         break
//       }
//       j--
//     }
//     arr[j] = temp
//   }
//   return arr
// }


// const result = insertionSort([5, 4, 3, 2, 1])
// console.log(result)



/**
 * quickSort
 */

const quickSort = (arr) => {
  if (arr.length <= 1) return arr
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
const result = quickSort([5, 4, 3, 2, 1])
console.log(result)














/**
 * 二分搜索
 * 前提是数组是有序的
 */

// const binarySearch = (arr, item) => {
//   let low = 0
//   let high = arr.length

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2)
//     if (mid < item) {
//       low = mid + 1
//     } else if (mid > item) {
//       high = mid - 1
//     } else {
//       return mid
//     }
//   }
//   return -1

// }

// const result = binarySearch([1, 2, 3, 4, 5], 2)
// console.log(result)


