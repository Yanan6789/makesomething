
function createCache(){
  let data = {}
  return {
    set: function(key, val){
      data[key] = val
    },
    get: function(key){
      return data[key]
    }
  }
}

const aaa = createCache()
aaa.set('price', 100)
console.log(aaa)

console.log(aaa.get('price'))
