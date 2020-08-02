
import MVVM from './MVVM'

let vm = new MVVM({
  el: '#app',
  data:{
    message:'pearyman',
    a:1
  }
})
console.log(vm)
