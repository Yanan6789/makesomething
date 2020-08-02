#! /usr/bin/env node
let fs = require('fs')
let entry = '../../src/index.js'
let output = '../../dist/main.js'
let script = fs.readFileSync(entry,'utf8')
let path = require('path') 
let modules = []
// 负责将结果进行更改 更改后继续走
let styleLoader = function(source){

}
// 处理依赖关系
script = script.replace(/require\(['"](.+?)['"]\)/g,function(){
  let name = path.join('../../src/',arguments[1]) 
  let content = fs.readFileSync(name, 'utf8')
  modules.push[{
    name, content
  }]
  return `require('${name}')`
})

let ejs = require('ejs')


let template = `
(function(modules) {

	function __webpack_require__(moduleId) {

	var module = installedModules[moduleId] = {
		exports: {}
		};

 		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		return module.exports;
 	}

 	return __webpack_require__(__webpack_require__.s = "<%-entry%>");
 })

({

"<%-entry%>":

(function(module, exports) {

eval(\`<%-script%>\`);

})
<%for(let i =0; i<modules.length; i++){
  let module = modules[i];%>,
  "<%-module.name%>":
  (function(module, exports) {
  eval(\`<%-module.content%>\`);

})
<%}%>

 });

`
let result = ejs.render(template,{
  entry,
  script,
  modules
})

fs.writeFileSync(output,result)
console.log('compile success')
