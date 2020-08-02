/**
 * 寻找数组最大值
 */

//  const findMax = (arr) =>{
//    let max=0
//   arr.forEach(item=>
//     max = item>max?item: max
//   )
//   return max
//  }
// console.log(findMax([-3,2,3,4,1000]));

// function comp(array1, array2){
//   //your code here
//   array1.every(item => return array2.includes(item*item))
// }
// console.log(comp([2],[4]));


// var merge = function(nums1, m, nums2, n) {
//   nums1 = nums1.concat(nums2)
//   let result = nums1.filter(item=>item!==0)
//   console.log(result.sort())
// }
// console.log(merge([1,2,3,0,0,0],3,[4,5,6],3));

/**
 * bubble_sort
 */

//  function bubble_sort(a){
//   for(let i = 0; i<a.length-1; i++){
//     if(a[i]>a[i+1]){
//       let temp = a[i]
//       a[i] = a[i+1]
//       a[i+1] = temp
//     }
//   }
//   console.log(a)
//  }
// console.log(bubble_sort([3,2,1,4]));


// function bubbleSort(arr){
//   let max = arr.length-1
//   for(let j=0; j<max; j++){
//     for(let i=0; i<max-j; i++){
//       if(arr[i]>arr[i+1]){
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//       }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort([3,2,1,4]));

// 求二叉树所有路径
// var binaryTreePaths = function(root) {
//   if(root === null)return [];
//   const {left, right, val} = root;
//   if (!(left || right)) return [String(val)];
//   let result = [];
//   if (left) result = result.concat(binaryTreePaths(left).map(v => val + "->" + v));
//   if (right) result = result.concat(binaryTreePaths(right).map(v => val + "->" + v));
//   return result;
// }
// console.log(binaryTreePaths([1,2,3,null,5]));

// // 二叉树路径总和
// var hasPathSum = function(root, sum) {
//   if(root==null) return false
  
//   if(root.left==null && root.right==null){
//       return root.val = sum
//   }
 
//   return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val)
  
// };

// // 258 各位相加
// var addDigits = function(num) {
//   return (num-1)%9+1
// }

/**
 * 
 * @param {翻转二叉树} root 
 */
var invertTree = function(root) {
  if (root !== null) {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left); 
    invertTree(root.right);
  }
  return root;
 


/**
 * 189 旋转数组
 */
var rotate = function(nums, k) {
  for (let i = 0;i < k; i++) {
      nums.unshift(nums.pop())
  }
};

/** 
 * new
 */

 // 1. 首先创建一个空对象
var o = new Object();
// 2. 将空对象的原型赋值为构造器函数的原型
o.__proto__ = A.prototype;
// 3. 更改构造器函数内部this，将其指向新创建的空对象
A.call(o);

/**
 * bind
 */
Function.prototype.testBind = function(that){
  var _this = this,
      slice = Array.prototype.slice,
      args = slice.apply(arguments,[1]),
      fNOP = function () {},
      bound = function(){
          //这里的this指的是调用时候的环境
          return _this.apply(this instanceof  fNOP ?　this : that||window,
              args.concat(Array.prototype.slice.apply(arguments,[0]))
          )
      }    
  fNOP.prototype = _this.prototype;

  bound.prototype = new fNOP();

  return bound;
}

/**
 * jsonp
 */
function jsonp(params) { 
  //创建script标签并加入到页面中 
  var callbackName = params.jsonp; 
  var head = document.getElementsByTagName('head')[0]; 
  // 设置传递给后台的回调参数名 
  params.data['callback'] = callbackName; 
  var data = formatParams(params.data); 
  var script = document.createElement('script'); 
  head.appendChild(script);  
  
  //创建jsonp回调函数 
  window[callbackName] = function(json) { 
   head.removeChild(script); 
   clearTimeout(script.timer); 
   window[callbackName] = null; 
   params.success && params.success(json); 
  };  


  //发送请求 
  script.src = params.url + '?' + data;  


  //为了得知此次请求是否成功，设置超时处理 
  if(params.time) { 
  script.timer = setTimeout(function() { 
   window[callbackName] = null; 
   head.removeChild(script); 
   params.error && params.error({ 
    message: '超时' 
   }); 
  }, time); 
  } 
 }; 

 /**
  * 防抖
  */
 function debounce(fn, wait) {
  var timer = null;
  return function () {
      var context = this
      var args = arguments
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
      timer = setTimeout(function () {
          fn.apply(context, args)
      }, wait)
  }
}

var fn = function () {
  console.log('boom')
}

setInterval(debounce(fn,500),1000) // 第一次在1500ms后触发，之后每1000ms触发一次

setInterval(debounce(fn,2000),1000)

/**
 * 节流
 */
function throttle(fn, gapTime) {
  let _lastTime = null;

  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}

let fn = ()=>{
  console.log('boom')
}

setInterval(throttle(fn,1000),10)

/**
 * reduce
 */
Array.prototype.fakeReduce = function fakeReduce(fn, base) {

  let initialArr = this;
  let arr = initialArr.concat();

  if (base) arr.unshift(base);
  let index, newValue;

  while (arr.length > 1) {
    index = initialArr.length - arr.length + 1;
    newValue = fn.call(null, arr[0], arr[1], index, initialArr);

    arr.splice(0, 2, newValue); // 直接用 splice 实现替换
  }

  return newValue;
};


/**
 * 下面显示什么
 */
document.body.addEventListener('click', () => {
  Promise.resolve().then(()=>console.log(1));
  console.log(2)
});
document.body.addEventListener('click', () => {
  Promise.resolve().then(()=>console.log(3));
  console.log(4)
});

/**
 * 解释一下这个是干什么的
 */
const property = Object.getOwnPropertyDescriptor(obj, key)
if (property && property.configurable === false) {
return
}

/**
 * loadsh  _get
 */
模拟实现loadash中的_.get()函数，实现如下传入参数取值效果
function get() {
// 请补全函数参数和实现逻辑
}
const obj = {
    selector: {
        to: {
            toutiao: 'FE coder'
        }
    },
    target: [1, 2, {
        name: 'byted'
    }
]
};
// 运行代码
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
//  输出结果：
// ['FE coder', 1, 'byted']
